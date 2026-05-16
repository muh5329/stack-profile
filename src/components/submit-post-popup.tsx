"use client";

import Link from "next/link";
import { useState } from "react";

import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Textarea } from "~/components/ui/textarea";

export function SubmitPostPopup() {
  const [title, setTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const utils = api.useUtils();
  const latestPostQuery = api.post.getLatest.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  const recentPostsQuery = api.post.list.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      setTitle("");
      setErrorMessage(null);
      await utils.post.getLatest.invalidate();
      await utils.post.list.invalidate();
    },
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
      <Card className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Admin post submission</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Submit a new post</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Create a new post by title. Only admins can publish posts through this endpoint.
            </p>
          </div>

          <Button variant="outline" size="sm" asChild>
            <Link href="/">Close</Link>
          </Button>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!title.trim()) {
              setErrorMessage("Please enter a post title.");
              return;
            }
            createPost.mutate({ title: title.trim() });
          }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="post-title" className="block text-sm font-medium text-slate-700">
              Post title
            </label>
            <input
              id="post-title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label htmlFor="post-body" className="block text-sm font-medium text-slate-700">
              Body (preview only)
            </label>
            <Textarea
              id="post-body"
              value={"This app stores titles only right now. Update Prisma schema to save body content later."}
              onChange={() => undefined}
              className="mt-2 h-32 w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              disabled
            />
          </div>

          {(errorMessage || createPost.isError) && (
            <p className="text-sm text-rose-600">
              {errorMessage ?? createPost.error?.message}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1 text-sm text-slate-600">
              <p className="font-medium text-slate-900">Latest post</p>
              <p>
                {latestPostQuery.isLoading
                  ? "Loading..."
                  : latestPostQuery.data
                  ? latestPostQuery.data.name
                  : "No posts yet."}
              </p>
            </div>
            <Button type="submit" disabled={createPost.isPending}>
              {createPost.isPending ? "Publishing..." : "Publish post"}
            </Button>
          </div>
        </form>

        <div className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Recent posts</h2>
          <div className="mt-4 space-y-3">
            {recentPostsQuery.isLoading ? (
              <p className="text-sm text-slate-600">Loading recent posts…</p>
            ) : recentPostsQuery.data && recentPostsQuery.data.length > 0 ? (
              recentPostsQuery.data.map((post) => (
                <div key={post.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="font-medium text-slate-950">{post.name}</p>
                  <p className="text-sm text-slate-600">{new Date(post.createdAt).toLocaleString()}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-600">No posts published yet.</p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
