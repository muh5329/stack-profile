import { z } from "zod";

import {
  createTRPCRouter,
  adminProcedure,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: adminProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.title,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return post ?? null;
  }),

  list: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.post.findMany({
      orderBy: { createdAt: "desc" },
      take: 20,
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
