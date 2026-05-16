import { z } from "zod";
import { eq } from "drizzle-orm";

import { env } from "~/env";
import { db } from "../../../../db/index";
import { profiles, posts } from "../../../../db/schema";

const bodySchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  snippet: z.string().min(1),
  tags: z.string(),
});

const parseBearerToken = (authorization: string | null) => {
  if (!authorization) return null;

  const [type, token] = authorization.split(" ");

  if (type?.toLowerCase() !== "bearer") return null;

  return token;
};

export async function POST(req: Request) {
  const authorization = req.headers.get("authorization");
  const token = parseBearerToken(authorization);
  const allowedTokens = env.POST_SUBMIT_TOKENS
    .split(",")
    .map((t) => t.trim());

  if (!token || !allowedTokens.includes(token)) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401 },
    );
  }

  let input;

  try {
    input = bodySchema.parse(await req.json());
  } catch {
    return Response.json(
      { error: "Invalid body" },
      { status: 400 },
    );
  }

  const username = "post_submitter";

  // find user
  let profile = (await db
    .select()
    .from(profiles)
    .where(eq(profiles.username, username))
    .limit(1))[0];

  // create user if missing
  if (!profile) {
    const inserted = await db
      .insert(profiles)
      .values({
        username,
        bio: "Auto generated submitter",
      })
      .returning();

    profile = inserted[0]!;
  }

  // create post
  const insertedPost = await db
    .insert(posts)
    .values({
      userId: profile.id,
      title: input.title,
      content: input.content,
      snippet: input.snippet,
      tags: input.tags,
      createdAt: new Date(),
    })
    .returning();

  return Response.json(insertedPost[0], {
    status: 201,
  });
}