"use client";

import { useEffect, useState } from "react";

export type Post = {
  slug: number;
  title: string;
  snippet: string;
  date: string;
  readingTime: string;
  tags: string[];
  category: string;
  content: string;
};

export let posts: Post[] = [];
export let pinnedPosts: PinnedPost[] = [];

function normalizeTags(rawTags: any): string[] {
  if (Array.isArray(rawTags)) {
    return rawTags.map(String).map((tag) => tag.trim()).filter(Boolean);
  }

  if (typeof rawTags === "string") {
    return rawTags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeContent(rawContent: any): string {
  if (typeof rawContent !== "string") return "";
  return rawContent.replace(/\\r?\\n/g, "\n");
}

function normalizePost(item: any): Post {
  const slug = item.id ?? 0;

  return {
    slug,
    title: item.title || "",
    snippet: item.snippet || "",
    date: item.date || item.createdAt || "",
    readingTime: item.readingTime || "",
    tags: normalizeTags(item.tags),
    category: item.category || "",
    content: normalizeContent(item.content),
  };
}

export type PinnedPost = {
  id: number;
  postId: number;
  title: string;
};

function normalizePinnedPost(item: any): PinnedPost {
  return {
    id: item.id || 0,
    postId: item.postId || 0,
    title: item.title || "",
  };
}
function mapPosts(rawData: any): Post[] {
  return Array.isArray(rawData) ? rawData.map(normalizePost) : [];
}

function mapPinnedPosts(rawData: any): PinnedPost[] {
  return Array.isArray(rawData) ? rawData.map(normalizePinnedPost) : [];
}


export function getPostBySlug(slug: string): Post | null {
  const numericSlug = Number(slug);
  return posts.find((item) => item.slug === numericSlug) ?? null;
}

type UseEditorialPostsResult = {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

type UsePinnedPostsResult = {
  pinnedPosts: PinnedPost[];
  loading: boolean;
  error: string | null;
};

export function useEditorialPosts(): UseEditorialPostsResult {
  const [postsData, setPostsData] = useState<Post[]>(posts);
  const [loading, setLoading] = useState(posts.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (posts.length > 0) {
      setPostsData(posts);
      setLoading(false);
      return;
    }

    async function loadPosts() {
      try {
        const res = await fetch("/api/get-posts", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Failed to load posts: ${res.status}`);
        }

        const rawData = await res.json();
        const mapped = mapPosts(rawData);

        if (!cancelled) {
          posts = mapped;
          setPostsData(mapped);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  return { posts: postsData, loading, error };
}


export function usePinnedPosts(): UsePinnedPostsResult {
  const [postsData, setPostsData] = useState<PinnedPost[]>(pinnedPosts);
  const [loading, setLoading] = useState(pinnedPosts.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (pinnedPosts.length > 0) {
      setPostsData(pinnedPosts);
      setLoading(false);
      return;
    }

    async function loadPosts() {
      try {
        const res = await fetch("/api/get-pinned-posts", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`Failed to load posts: ${res.status}`);
        }

        const rawData = await res.json();
        const mapped = mapPinnedPosts(rawData);

        if (!cancelled) {
          pinnedPosts = mapped;
          setPostsData(mapped);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  return { pinnedPosts: pinnedPosts, loading, error };
}