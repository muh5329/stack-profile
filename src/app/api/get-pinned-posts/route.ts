
import { db } from "../../../../db/index";
import { pinnedPosts } from "../../../../db/schema";


export async function GET(req: Request) {

  const allPinnedPosts = await db
    .select()
    .from(pinnedPosts);
    
  const formattedPosts = allPinnedPosts.map((post) => ({
    id: post.id,
    postId: post.postId,
    title: post.title,
  }));

  return Response.json(formattedPosts);
}

