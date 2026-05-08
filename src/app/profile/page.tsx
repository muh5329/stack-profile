import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, Mail, Twitter } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

const technologies = [
  "Raylib",
  "Godot",
  "C",
  "Rendering",
  "ECS",
  "Physics",
  "AI",
  "Simulation",
  "Systems",
  "Procedural",
];

const currentWork = [
  {
    title: "Data integration and stream systems",
    description:
      "Modern engineering for real-time analytics, observability, and resilient pipeline design.",
  },
  {
    title: "Experimental game interfaces",
    description:
      "Small structural experiments in RTS, procedural worlds, and play systems that feel personal.",
  },
];

const projects = [
  "Goblin Research Engine",
  "Procedural Heraldry Toolkit",
  "RTS Mesh Pathfinding",
  "Signal Systems Notebook",
];

const writing = [
  "The Cathedral and the Bazaar",
  "On Simulation and Ritual",
  "Building Tiny Worlds",
];

const interests = [
  "Systems thinking",
  "Simulation practice",
  "Urbanism and ritual",
  "Cultural interfaces",
  "Experimental publishing",
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
            Vertical
          </Link>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-950">Home</Link>
            <Link href="/profile" className="font-medium text-slate-950">Profile</Link>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <div className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src="/profile_pic/ghibli_profile.png"
                width={720}
                height={720}
                alt="Muneeb Haq"
                className="h-auto w-full"
              />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Profile</p>
                <h1 className="mt-4 text-3xl font-semibold text-slate-950">Muneeb Haq</h1>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Builder of strange systems and experimental software. Currently exploring RTS simulation, procedural worlds, and cultural interfaces.
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  <strong className="text-slate-950">Location:</strong> United States
                </p>
                <p>
                  <strong className="text-slate-950">Focus:</strong> systems, simulation, and cultural notes.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/muh5329" target="_blank" rel="noreferrer">
                    <GithubIcon className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://x.com/Muneeb22125325" target="_blank" rel="noreferrer">
                    <Twitter className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="mailto:muh5329@gmail.com">
                    <Mail className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://monkeyfactory.org/" target="_blank" rel="noreferrer">
                    <LinkedinIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">About</p>
              <div className="mt-6 space-y-4 text-base leading-7 text-slate-700">
                <p>
                  I am a software engineer with a long-running interest in games, data systems, and experimental interfaces. My work sits between cultural writing and systems design, where I use software as a way to explore rituals, infrastructure, and creative constraints.
                </p>
                <p>
                  I started in game development, built healthcare and big-data systems professionally, and now make space for smaller publications, notes, and experimental tooling that surface new ways to think about software.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Current work</p>
              <div className="mt-6 space-y-4">
                {currentWork.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                    <p className="font-semibold text-slate-950">{item.title}</p>
                    <p className="mt-2 text-slate-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Technologies</p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-700">
                {technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-slate-900">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Project archive</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <div key={project} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <p className="font-semibold text-slate-950">{project}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Writing / notes</p>
              <div className="mt-6 space-y-4 text-slate-700">
                {writing.map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                    <p className="font-medium text-slate-950">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Philosophy / interests</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {interests.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
