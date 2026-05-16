
import { desc, eq } from "drizzle-orm";
import { db } from "../../../../db/index";
import { profiles, posts } from "../../../../db/schema";


export async function GET(req: Request) {

  const allPosts = await db
    .select()
    .from(posts)
    .innerJoin(profiles, eq(profiles.id, posts.userId))
    .orderBy(desc(posts.createdAt));
    
  const formattedPosts = allPosts.map(({ posts, profiles }) => ({
    id: posts.id,
    title: posts.title,
    snippet: posts.snippet,
    tags: posts.tags,
    createdAt: posts.createdAt,
    username: profiles.username,
    bio: profiles.bio,
  }));

  return Response.json(formattedPosts);
}