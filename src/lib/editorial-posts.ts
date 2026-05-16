"use client";

import { useEffect, useState } from "react";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tags: string[];
  category: string;
  content: string[];
};

export let posts: Post[] = [];

function normalizePost(item: any): Post {
  const slug =
    item.slug ||
    item.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") ||
    "";

  return {
    slug,
    title: item.title || "",
    excerpt: item.excerpt || item.snippet || "",
    date: item.date || item.createdAt || "",
    readingTime: item.readingTime || "",
    tags: Array.isArray(item.tags) ? item.tags : [],
    category: item.category || "",
    content: Array.isArray(item.content) ? item.content : [],
  };
}

function mapPosts(rawData: any): Post[] {
  return Array.isArray(rawData) ? rawData.map(normalizePost) : [];
}

export function getPostBySlug(slug: string): Post | null {
  return posts.find((item) => item.slug === slug) ?? null;
}

type UseEditorialPostsResult = {
  posts: Post[];
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

    loadPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  return { posts: postsData, loading, error };
}
