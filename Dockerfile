FROM node:22-bullseye-slim AS base

# Install dependencies only when needed
FROM base AS deps
RUN apt-get update && apt-get install -y python3 build-essential libsqlite3-dev && rm -rf /var/lib/apt/lists/*
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

RUN npm rebuild better-sqlite3 --build-from-source || true

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules

# Copy source files and environment config for build-time DB/schema resolution
COPY . .
COPY .env* ./
RUN if [ ! -f .env ] && [ -f .env.example ]; then cp .env.example .env; fi

# Ensure Prisma client generation happens before the Next build
RUN npx prisma generate

# Apply Drizzle migrations to populate/update the SQLite DB before build
RUN npx drizzle-kit migrate

# Ensure runtime DB and env files exist so the runner stage can copy them safely
RUN mkdir -p /app/runtime \
  && if [ -d /app/db ]; then cp -a /app/db /app/runtime/db; fi \
  && if [ -f /app/db.sqlite ]; then cp /app/db.sqlite /app/runtime/db.sqlite; else node -e "require('fs').closeSync(require('fs').openSync('db.sqlite','w'))" && cp db.sqlite /app/runtime/db.sqlite; fi \
  && if [ -f /app/.env ]; then cp /app/.env /app/runtime/.env; elif [ -f /app/.env.example ]; then cp /app/.env.example /app/runtime/.env; else touch /app/runtime/.env; fi

# Next.js collects anonymous telemetry data about general usage.
ENV NEXT_TELEMETRY_DISABLED 1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build ; \
  else echo "Lockfile not found." && exit 1; \
  fi

FROM base AS runner
WORKDIR /app
RUN apt-get update && apt-get install -y openssl libssl1.1 ca-certificates || true && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000
ENV DATABASE_URL="file:./db.sqlite"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy runtime assets from the build stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy SQLite database files and local env file for runtime from the prepared runtime bundle
COPY --from=builder /app/runtime/db ./db
COPY --from=builder /app/runtime/db.sqlite ./db.sqlite
COPY --from=builder /app/runtime/.env ./.env

USER nextjs

EXPOSE 3000

# server.js is created by next build from the standalone output
CMD HOSTNAME="0.0.0.0" node server.js
