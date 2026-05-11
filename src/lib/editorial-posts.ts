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

export const posts: Post[] = [
  {
    slug: "the-cathedral-and-the-bazaar",
    title: "The Cathedral and the Bazaar",
    excerpt:
      "A field guide for building software that feels alive, social, and structurally open to emergent play.",
    date: "May 1, 2026",
    readingTime: "6 min",
    tags: ["Culture", "Systems"],
    category: "Essays",
    content: [
      "Open systems thrive when contributors can see the structure under the hood. This is a note on why modular software and transparent process are not just technical decisions, but social ones.",
      "In the bazaar, code is shaped by a community, not a single architect. That means shipping early, iterating often, and building tools that accept friction as a signal instead of a flaw.",
      "The cathedral metaphor still matters when we choose abstractions and coordinate releases, but the bazaar is where growth and resilience happen. The strongest software balances both.",
    ],
  },
  {
    slug: "on-simulation-and-ritual",
    title: "On Simulation and Ritual",
    excerpt:
      "Why ritualized interfaces matter for modern tools and how procedural habits shape our digital landscapes.",
    date: "Apr 22, 2026",
    readingTime: "5 min",
    tags: ["Simulation", "Culture"],
    category: "Culture",
    content: [
      "Simulations are not only about math; they are also about the rituals we design around them. Rituals make complexity legible and behavior repeatable.",
      "A good ritual in software is one that feels meaningful without being burdensome. It should guide the user while still leaving room for exploration.",
      "When I build interfaces, I think about how users will re-enter the same flow tomorrow. Ritual helps anchor those moments so systems feel less chaotic.",
    ],
  },
  {
    slug: "building-tiny-worlds",
    title: "Building Tiny Worlds",
    excerpt:
      "A practical note on constraints, player agency, and making systems feel dense without overwhelming the user.",
    date: "Mar 30, 2026",
    readingTime: "7 min",
    tags: ["Graphics", "RTS"],
    category: "Graphics",
    content: [
      "Tiny worlds are not smaller versions of large worlds. They are careful slices where every rule and object matters, and the player is invited to discover depth in a small space.",
      "Constraints are the most powerful design tool I use. They focus the experience, reduce noise, and make every choice feel consequential.",
      "The challenge is to make a system feel rich without adding more. The trick is to let interactions compound naturally and reward curiosity.",
    ],
  },
  {
    slug: "the-joy-of-constraints",
    title: "The Joy of Constraints",
    excerpt:
      "A short meditation on why limits are the most creative design tool I use when shaping experimental software.",
    date: "Mar 10, 2026",
    readingTime: "4 min",
    tags: ["Experiments", "Systems"],
    category: "Experiments",
    content: [
      "Every constraint is an invitation to shape a problem more clearly. When I choose a boundary, I also create a context for meaningful exploration.",
      "Constraints are not restrictions; they are compositional rules that make emergent behavior possible. They turn random noise into deliberate signals.",
      "The joy of constraints is watching a small, well-defined system reveal unexpected depth through use and iteration.",
    ],
  },
  {
    slug: "procedural-pathfinding-for-persistence",
    title: "Procedural Pathfinding for Persistence",
    excerpt:
      "A note about building RTS intelligence that feels deliberate and flexible instead of brittle and scripted.",
    date: "Feb 14, 2026",
    readingTime: "8 min",
    tags: ["RTS", "AI"],
    category: "RTS",
    content: [
      "The hardest part of pathfinding is not finding a path; it is making the unit feel like it understood the world. Persistence means the agent remembers the structure and adapts gracefully.",
      "Procedural systems let you avoid brittle precomputed behavior by giving the agent a small set of heuristics that work across different layouts.",
      "In practice, that means building intelligence around purpose rather than precise movement. The path is less important than the feeling of a consistent decision.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null;
}
