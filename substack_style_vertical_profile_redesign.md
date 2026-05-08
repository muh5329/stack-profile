# Substack-Style Redesign for Vertical Profile

Source Project:
urlvertical_profile GitHubhttps://github.com/muh5329/vertical_profile

---

# Product Direction

Transform the current vertical profile concept into a clean editorial platform inspired by Substack, Are.na, and modern cultural magazines.

The tone should feel:

- Editorial
- Intellectual
- Minimal
- Warm
- Slightly experimental
- Designed for long-form reading
- Social but calm

The site should feel like:

> “A personal publication + cultural notebook + experimental portfolio.”

---

# Core Pages

## 1. Home Page

This becomes the main reading/discovery feed.

### Purpose

- Display posts/articles/projects
- Allow filtering by topic
- Support search
- Surface pinned cultural pieces
- Feel scrollable like Substack/Twitter hybrid

---

## 2. Profile Page

This becomes the personal identity layer.

### Purpose

- Biography
- Timeline
- Interests
- Technologies
- Current experiments
- Links
- Featured projects
- Reading lists / philosophy / notes

Think:

> “Independent researcher / builder / writer profile.”

---

# Information Architecture

# HOME PAGE

## Top Navigation

Minimal sticky nav.

### Left
- Logo / Personal publication name

Examples:
- Muneeb
- Goblin Research
- Vertical
- Fallen Star
- Echoes Journal

### Center
- Optional category tabs

### Right
- Search icon
- Profile avatar
- Theme toggle

---

# Hero Area

Very subtle.

Example:

--------------------------------------------------
Vertical
Notes on systems, games, simulation, culture,
and strange software.
--------------------------------------------------

Avoid large startup-style hero sections.
Substack keeps this understated.

---

# Top Filters Row

This is important.

Should remain sticky while scrolling.

## Layout

[ All ] [ Essays ] [ RTS ] [ Graphics ] [ Simulation ] [ AI ] [ Systems ] [ Culture ] [ Experiments ]

On the right:

[ Search Field ]

---

# Search Behavior

Search should live-filter:

- Titles
- Tags
- Descriptions
- Content snippets

Optional:
- fuzzy search
- command palette feel

Recommended:
- Fuse.js

---

# Main Feed Layout

Two-column layout.

--------------------------------------------------
| MAIN FEED              | RIGHT SIDEBAR         |
--------------------------------------------------
| posts                  | pinned in culture     |
| essays                 | reading now           |
| project notes          | featured links        |
| devlogs                | currently exploring   |
--------------------------------------------------

---

# Feed Card Design

Substack-inspired.

NOT cards with huge shadows.

Keep them flat and editorial.

## Post Item Structure

--------------------------------------------------
Title
Short excerpt preview that wraps naturally.

Tag pills
Date · reading time
--------------------------------------------------

Optional preview image.

Hover effect:
- subtle background shift
- slight left border accent

---

# “Pinned in Culture” Section

This replaces “Rising in Culture.”

Should live in right sidebar.

## Style

Very editorial.

--------------------------------------------------
PINNED IN CULTURE

The Cathedral and the Bazaar
On Simulation and Ritual
Building Tiny Worlds
The Joy of Constraints
--------------------------------------------------

Could include:
- essays
- external links
- books
- archived notes

Optional tiny thumbnails.

---

# Sidebar Modules

## Reading Now

Small compact list.

## Current Experiments

Examples:
- RTS pathfinding
- procedural heraldry
- goblin tools
- AI agents

## Links

- GitHub
- Twitter/X
- Email
- RSS

---

# PROFILE PAGE

This page should feel more personal and quieter.

---

# Profile Hero

Two-column.

--------------------------------------------------
| avatar | bio text                         |
--------------------------------------------------

## Include

- Name
- Short descriptor
- Current focus
- Location optional
- Social links

Example:

Muneeb Haq
Builder of strange systems and experimental software.
Currently exploring RTS simulation, procedural worlds,
and cultural interfaces.

---

# Sections

## About

Long-form markdown-supported bio.

## Current Work

Grid/list of active projects.

## Project Archive

Chronological.

## Technologies

Keep understated.

Instead of giant skill bubbles:

Raylib · Godot · C · Rendering · ECS · Physics · AI

## Writing / Notes

Recent essays or thought fragments.

## Philosophy / Interests

Could include:

- systems thinking
- simulation
- urbanism
- rituals
- heraldry
- infrastructure
- game AI

---

# Visual Style

# Typography

Critical.

Use elegant editorial typography.

Recommended pairings:

## Option A
- Inter
- Source Serif 4

## Option B
- Geist
- IBM Plex Serif

## Option C
- Instrument Sans
- Newsreader

---

# Layout Principles

## DO

- Use whitespace heavily
- Keep borders subtle
- Flat surfaces
- Thin separators
- Comfortable reading width
- Strong typography hierarchy
- Calm animations

## DO NOT

- Heavy gradients
- Giant glassmorphism
- Overdone shadows
- Startup landing page aesthetics
- Oversaturated colors

---

# Color Direction

## Base

Warm off-white background.

Examples:
- #f8f6f2
- #f5f1ea

## Text

- near-black
- warm dark gray

## Accent

Single muted accent:

- forest green
- rust
- oxblood
- muted gold

---

# Recommended Layout Dimensions

## Main Content Width

720px–820px

## Sidebar

280px–340px

## Max Overall Width

1400px

---

# Component Suggestions

## Core Components

- Navbar
- FilterBar
- SearchBar
- FeedPost
- SidebarSection
- ProfileHero
- ProjectList
- EssayCard
- TagPill

---

# Suggested Tech Stack

## Frontend

- Next.js
- Tailwind
- Framer Motion

## Content

- MDX
- Contentlayer
OR
- Sanity
OR
- Supabase

## Search

- Fuse.js

---

# Suggested Home Layout Wireframe

--------------------------------------------------
NAVBAR
--------------------------------------------------

Vertical
Notes on systems and simulation.

--------------------------------------------------
FILTER BAR + SEARCH
--------------------------------------------------

--------------------------------------------------
| MAIN FEED                      | SIDEBAR       |
--------------------------------------------------
| Essay                          | Pinned        |
| Essay                          | Reading now   |
| Project log                    | Experiments   |
| Tiny note                      | Links         |
--------------------------------------------------

---

# Suggested Profile Layout Wireframe

--------------------------------------------------
PROFILE HERO
--------------------------------------------------

--------------------------------------------------
ABOUT
--------------------------------------------------

--------------------------------------------------
CURRENT WORK
--------------------------------------------------

--------------------------------------------------
ARCHIVE
--------------------------------------------------

--------------------------------------------------
WRITING
--------------------------------------------------

---

# Interaction Details

## Feed Scrolling

Infinite or paginated.

## Filters

Animate softly.

## Search

Instant results.

## Reading Progress

Optional thin progress bar at top.

## Mobile

Sidebar collapses below feed.

Filter row becomes horizontally scrollable.

---

# Vibe Reference

A blend of:

- Substack
- Are.na
- Linear
- old blogs
- literary journals
- hacker notebooks
- cultural magazines

Not:

- SaaS dashboard
- startup landing page
- crypto aesthetic

---

# Recommended Folder Structure

/app
  /(site)
    /page.tsx
    /profile/page.tsx

/components
  FeedPost.tsx
  Sidebar.tsx
  FilterBar.tsx
  SearchBar.tsx
  ProfileHero.tsx

/content
  essays
  notes
  projects

/lib
  search.ts
  filters.ts

/styles
  globals.css

---

# Extra Feature Ideas

## 1. Tiny Notes

Twitter-sized fragments in the feed.

## 2. Reading Mode

Distraction-free article mode.

## 3. Project Logs

Chronological development journals.

## 4. Cultural Index

Tag essays/books/projects into cultural clusters.

## 5. Goblin Experiments

A dedicated page for tiny playground projects.

---

# Final Direction

The redesign should feel like:

> “An independent publication for experiments in systems, games, culture, and software.”

Prioritize:

1. Typography
2. Reading comfort
3. Calm layout rhythm
4. Discoverability
5. Elegant filtering/search
6. Personal identity through writing

