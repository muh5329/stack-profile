"use client";

import { useMemo, use } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Card } from "~/components/ui/card";
import { getPostBySlug, useEditorialPosts } from "~/lib/editorial-posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export default function PostPage({ params }: PostPageProps) {
  const { slug } = use(params);
  const { posts, loading, error } = useEditorialPosts();
  const post = useMemo(() => getPostBySlug(slug), [slug, posts]);
  const relatedPosts = useMemo(() => {
  if (!post) return [];

  return posts.filter((item) => item.slug !== post.slug).slice(0, 3);
}, [posts, post]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Card className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-slate-700">Loading post…</p>
          </Card>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Card className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-red-600">{error}</p>
            <Link href="/" className="mt-4 inline-block text-slate-700 underline">
              Back to editorial
            </Link>
          </Card>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Card className="rounded-3xl border border-slate-200 bg-white p-8">
            <p className="text-slate-700">Post not found.</p>
            <Link href="/" className="mt-4 inline-block text-slate-700 underline">
              Back to editorial
            </Link>
          </Card>
        </div>
      </main>
    );
  }



  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
            Monkey Factory
          </Link>
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-950">
            Back to editorial
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{post.category}</p>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="space-y-8 text-base leading-8 text-slate-700">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            <Card className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Related posts</p>
              <div className="mt-5 space-y-3 text-sm text-slate-700">
                {relatedPosts.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/editorial/${item.slug}`}
                    className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-950 transition hover:border-slate-300"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </Card>
          </article>

          <aside className="space-y-6">
            <Card className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Snippet</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">{post.snippet}</p>
            </Card>
          </aside>
        </div>
      </section>
    </main>
  );
}
