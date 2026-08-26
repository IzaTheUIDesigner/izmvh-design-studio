# Project Context — IZMVH Design Studio Redesign

## What this project is
This is the **izmvh-design-studio** codebase (izmvh.co.za) — a Next.js 14 site using
TypeScript, Tailwind CSS, and Framer Motion, deployed via GitHub → Vercel with
Afrihost DNS, Zoho Mail, and a Resend-powered contact form.

We are giving the site a visual redesign inspired by a purchased template called
**Stag**. Stag is a static Bootstrap 5 + jQuery HTML template — it is **not** part of
our tech stack and should never be copied in as raw files. It exists only as a
design/layout reference. Every section built from it must be a proper React/TSX
component using our existing Tailwind setup and component patterns.

## Do NOT change
- The Next.js / TypeScript / Tailwind / Framer Motion stack
- The Resend contact form integration and its API route
- The GitHub → Vercel deployment pipeline
- The DNS / email setup (not touched by this work at all)

## Design reference: Stag template
Static reference files live in `/reference/stag/` (HTML/CSS/JS — read-only, do not
import or link to these directly from the app).

**Section order to replicate on the homepage** (translate each into its own
component, e.g. `components/sections/Hero.tsx`):
1. Hero — large intro, sticky sidebar-style nav rather than a top navbar
2. Project showcase grid
3. Partner / client logos strip
4. Education & Experience
5. Services
6. Tech stack / tools
7. Blog preview
8. Testimonials
9. Gallery
10. Contact
11. Footer

**Design tokens to carry over** (adapt into Tailwind config, don't hardcode):
- Background: near-black, `#040404`
- Accent: single blue, `#00aaff` — used sparingly, not as a dominant color
- Body text: muted gray, `#8E8E8E`
- Heading/emphasis text: near-white, `#F9F9F9`
- Font: **DM Sans** (Google Font) for everything, multiple weights
- Overall feel: dark, minimal, generous whitespace, one accent color — the
  layout rhythm and restraint matter more than any single visual flourish

**Animations**: Stag itself has no animation library (no GSAP/AOS) — plain
Bootstrap/jQuery. For our scroll/reveal animations, use **Framer Motion**
(already in our stack) rather than introducing a new animation dependency.
Keep animations subtle — fade/slide-in on scroll for sections, not gimmicky.

## Content & media migration
The current live site's copy, project case studies, and images need to move
into the new components. Do not invent placeholder content for real sections
(e.g. project descriptions, bio, services) — pull actual content from the
current site/repo. Flag anything unclear rather than guessing.

## How to work
Build and review one section at a time, in the order listed above, rather
than generating the whole homepage in one pass. After each section:
1. Confirm it renders correctly and responsively (mobile + desktop)
2. Confirm it matches our existing component/file conventions
3. Only then move to the next section

Once all sections are built and content is migrated, do a dedicated
consistency pass: check spacing, font sizing, color usage, and responsive
breakpoints across the whole page before considering the section done.
