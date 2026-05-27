"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { useEditorialPosts } from "~/lib/editorial-posts";

export default function ArchivePage() {
  const [visibleCount, setVisibleCount] = useState(10);
  const { posts, loading, error } = useEditorialPosts();

  const visiblePosts = useMemo(() => posts.slice(0, visibleCount), [posts, visibleCount]);
  const hasMore = visibleCount < posts.length;

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

      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="mb-8 space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Archive</p>
          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            All posts
          </h1>
          
          <div className="flex flex-wrap gap-3 text-sm text-slate-500">
            <span>{posts.length} posts</span>
            {loading ? <span>· Loading…</span> : null}
            {error ? <span className="text-rose-600">· {error}</span> : null}
          </div>
        </div>

        <div className="grid gap-6">
          {loading ? (
            <Card className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-slate-700">Loading archive…</p>
            </Card>
          ) : error ? (
            <Card className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-red-600">{error}</p>
            </Card>
          ) : posts.length === 0 ? (
            <Card className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-slate-700">No posts available yet.</p>
            </Card>
          ) : (
            visiblePosts.map((post) => (
              <Card
                key={post.slug}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-0.5 hover:border-slate-900 hover:shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>{formatDistanceToNow(post.date, { addSuffix: true })}</span>
                  <span>·</span>
                  <span>{post.readingTime || "Unknown read time"}</span>
                </div>
                <Link href={`/editorial/${post.slug}`} className="mt-4 block">
                  <h2 className="text-3xl font-semibold text-slate-950 transition group-hover:text-slate-900">
                    {post.title}
                  </h2>
                </Link>
                <p className="mt-4 text-slate-700">{post.snippet}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))
          )}
        </div>

        {hasMore && !loading && !error ? (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount((current) => Math.min(current + 10, posts.length))}
            >
              Show more
            </Button>
          </div>
        ) : null}
      </section>
    </main>
  );
}
