import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GithubIcon, LinkedinIcon, Mail, Twitter } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

const technologies = [
  "Java",
  "Go",
  "Python",
  "TypeScript",
  "Apache Flink",
  "EMR",
  "gRPC",
  "Docker",
  "AWS",
  "Terraform",
  "Concourse",
  "Spring Boot",
  "React",
  "Next.js",
  "IntelliJ",
  "VSCode",
  "Databricks",
  "Neovim",
  "tmux",
];

const currentWork = [
  {
    title: "JPMC - Senior Software Engineer ",
    description:
      "Analyzed large-scale credit and transaction datasets to build fraud and abuse detection models, pipelines, and analytics. I leveraged EMR, Airflow DAGs, Java APIs, XGBoost, and group-shap explainability techniques to surface high-risk patterns and improve model precision.",
  },
  {
    title: "Comcast — Backend Engineer III",
    description:
      "Building real-time data integration and outage detection systems using Apache Flink, Spring Boot, Redis, and AWS for proactive customer experience and operational analytics.",
  },
  {
    title: "Comcast — Engineer II",
    description:
      "Delivered Angular and React applications for customer lifecycle diagnostics, data pipeline ingestion, and ML-driven recommendations powered by Databricks and Python.",
  },
  {
    title: "Independence Blue Cross — Software Developer",
    description:
      "Built single-page apps for member onboarding and support workflows, including primary care physician selection and agent-facing support tools.",
  },
];

const projects = [
  {
    title: "WaveCollapseEditor",
    description: "Wave Transform Collapse Algorithm Editor to build connections and rules.",
    link: "https://github.com/muh5329/WaveCollapseEditor",
    language: "JavaScript",
  },
  {
    title: "SpacePortfolio",
    description: "A fun Space themed Portfolio site.",
    link: "https://github.com/muh5329/SpacePortfolio",
    language: "JavaScript",
  },
  {
    title: "DigitalPaperControlPlane",
    description: "Sony Digital Paper control plane to show random stuff on a set interval.",
    link: "https://github.com/muh5329/DigitalPaperControlPlane",
    language: "Python",
  },
  {
    title: "FuzzyPlanets",
    description: "Planet Makers.",
    link: "https://github.com/muh5329/FuzzyPlanets",
    language: "JavaScript",
  },
  {
    title: "vertical_profile",
    description: "A vertical profile redesign inspired by modern editorial portfolios.",
    link: "https://github.com/muh5329/vertical_profile",
    language: "TypeScript",
  },
  {
    title: "LegionCommander",
    description: "Godot isometric game.",
    link: "https://github.com/muh5329/LegionCommander",
    language: "GDScript",
  },
];


export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-slate-950">
            Monkey Factory
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
                  Muneeb is an engineer with over nine years of professional experience across both backend and frontend systems. He builds real-time data pipelines, customer-facing web apps, and experimental tooling that connects infrastructure and product.
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  <strong className="text-slate-950">Location:</strong> Coatesville, PA
                </p>
                <p>
                  <strong className="text-slate-950">Focus:</strong> backend systems, frontend experiences, and data-driven tooling.
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
                  <Link href="https://www.linkedin.com/in/muneeb-haq-87b96098/" target="_blank" rel="noreferrer">
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
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Experience</p>
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
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Project Highlights</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-slate-100 bg-slate-50 p-5 no-underline transition hover:border-slate-300 hover:bg-slate-100"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-950">{project.title}</p>
                      <p className="mt-2 text-sm text-slate-700">{project.description}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-500" />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">{project.language}</p>
                </Link>
              ))}
            </div>
          </div>

          
        </div>
      </section>
    </main>
  );
}
