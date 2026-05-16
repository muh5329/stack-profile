# Stack Profile

A vertical-profile redesign inspired by Substack and modern editorial portfolios.
This T3 Stack project is built with Next.js, Tailwind CSS, Drizzle, tRPC, NextAuth, and shadcn/ui.

## Project Direction

The site blends a personal publication with an identity-focused profile page.
It is designed to feel editorial, intellectual, minimal, and warm — with a focus on long-form reading and calm cultural presentation.

## Core Experience

- Editorial-inspired home feed with scrollable content
- Sticky minimal top navigation with search and profile controls
- Filterable topic tabs and lightweight search behavior
- Substack-style post cards with title, excerpt, tags, and metadata
- Right sidebar with "Pinned in Culture", reading lists, and current experiments
- Personal profile page with biography, interests, technologies, links, and featured work

## Current Features

- [X] Header
- [X] Quick blurb
- [X] Social links
- [X] Skills section
- [X] Experience section
- [X] Featured projects
- [X] Testimonials
- [X] Contact form
- [X] Footer

## TODO

- Continue implementing editorial feed search and filtering
- Refine right sidebar modules (Pinned in Culture, Reading Now, Current Experiments)

## Dependencies

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [shadcn/ui](https://ui.shadcn.com)

## Development

### Running the Application

To start the development server:

```bash
npm run dev
```

### Database Commands

This project uses Drizzle ORM with SQLite.

- Generate migrations: `npm run db:generate`
- Run migrations: `npm run db:migrate`
- Open Drizzle Studio (database viewer): `npx drizzle-kit studio`

## Deployment

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify), and [Docker](https://create.t3.gg/en/deployment/docker).
