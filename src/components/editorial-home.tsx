"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Moon, Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { type Post, useEditorialPosts , usePinnedPosts } from "~/lib/editorial-posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDistanceToNow } from "date-fns";

const categories = [
  "All",
  "Essays",
  "RTS",
  "Graphics",
  "Simulation",
  "AI",
  "Systems",
  "Culture",
  "Experiments",
];


const experiments = [
  "RTS pathfinding mesh",
  "Procedural heraldry engine",
  "Goblin tools for creative scripting",
  "Agent-driven publishing flow",
];

const links = [
  { label: "GitHub", url: "https://github.com/muh5329" },
  { label: "X / Twitter", url: "https://x.com/Muneeb22125325" },
  { label: "Email", url: "mailto:muh5329@gmail.com" },
  { label: "RSS", url: "/rss.xml" },
];

function matches(post: Post, query: string) {
  const normalized = query.toLowerCase();
  return (
    post.title.toLowerCase().includes(normalized) ||
    post.snippet.toLowerCase().includes(normalized) ||
    post.tags.some((tag) => tag.toLowerCase().includes(normalized))
  );
}

export function EditorialHome() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { posts, loading, error } = useEditorialPosts();
  const {pinnedPosts} = usePinnedPosts();

  const filteredPosts = useMemo(() => {
  return posts
    .filter((post) => {
      const categoryMatch =
        activeCategory === "All" ||
        post.category === activeCategory ||
        post.tags.includes(activeCategory);

      const searchMatch = !search || matches(post, search);

      return categoryMatch && searchMatch;
    })
    .slice(0, 3);
}, [activeCategory, search, posts]);

  return (
    <main className="h-screen overflow-y-auto bg-slate-50 text-slate-950">
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
            Monkey Factory
          </Link>

          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <Link href="/" className="hover:text-slate-950">Home</Link>
            <Link href="/profile" className="hover:text-slate-950">Profile</Link>
            <Link href="/archive" className="hover:text-slate-950">Archive</Link>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100">
              <Moon className="h-4 w-4" />
            </Button>
            {/* <Button variant="outline" size="sm" asChild>
              <Link href="/submit-post">Submit post</Link>
            </Button> */}
            <Button variant="outline" size="sm" asChild>
              <Link href="/profile">Profile</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Personal musings</p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Thoughts and experiments on games, software, and random interests.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              An editorial notebook for projects, essays, and random things in software.
            </p>
          </div>

          
        </div>
      </section>

      <section className="sticky top-[76px] z-20 border-b border-slate-200 bg-slate-50/95 px-6 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeCategory === category
                    ? "border-slate-900 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm sm:max-w-md">
            <Search className="h-4 w-4 text-slate-500" />
            <label htmlFor="home-search" className="sr-only">
              Search articles
            </label>
            <input
              id="home-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search titles, tags, excerpts"
              className="w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      {/* # Cards */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6  pr-2 max-h-[70vh]"> 
          
          {loading ? (
            <Card className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-slate-700">Loading posts...</p>
            </Card>
          ) : error ? (
            <Card className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-red-600">{error}</p>
            </Card>
          ) : filteredPosts.length === 0 ? (
            <Card className="rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-slate-700">No posts match that search. Try another term or category.</p>
            </Card>
          ) : (
            filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/editorial/${post.slug}`}
                className="group block rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-50"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>
                    {formatDistanceToNow(post.date, { addSuffix: true })}
                  </span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950">{post.title}</h2>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.snippet}</ReactMarkdown>
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
              </Link>
            ))
          )}

          <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-full px-8"
          >
            <Link href="/archive">More</Link>
          </Button>
        </div>


        </div>
             

        <aside className="space-y-6">
        
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Pinned</p>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              {pinnedPosts.map((item) => (
                  <Link
                  key={item.postId}
                  href={`/editorial/${item.postId}`}
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-950 transition hover:border-slate-300"
                > 
                  <p className="font-medium text-slate-950">{item.title}</p>
                </Link>
                
              ))}
            </div>
          </div>

          <Card className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Links</p>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-slate-950 transition hover:border-slate-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </Card>
        </aside>
      </section>
    </main>
  );
}
