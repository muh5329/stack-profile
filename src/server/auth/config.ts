import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      isAdmin?: boolean;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    Google,
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Google provider.
     * Refer to the NextAuth.js docs for the provider you want to use.
     *
     * @see https://next-auth.js.org/providers
     */
  ],
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => {
      const adminEmails = (process.env.ADMIN_EMAILS || "")
        .split(",")
        .map((email) => email.trim().toLowerCase())
        .filter(Boolean);
      const email = session.user?.email?.toLowerCase();

      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          isAdmin: email ? adminEmails.includes(email) : false,
        },
      };
    },
  },
} satisfies NextAuthConfig;
