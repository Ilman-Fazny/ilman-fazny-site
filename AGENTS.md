# AGENTS.md: ilmanfazny.com

Read `docs/PLAN.md` before any task. It is the source of truth. If a request conflicts with it, say so and ask before proceeding.

## Project

Personal site for Ilman Fazny: portfolio, case studies, freelance offers, later a blog. Goal: a recruiter trusts it in 30 seconds. Style: "Spec sheet", precise engineering documentation, not a startup landing page.

## Stack

- Next.js (App Router), React, TypeScript strict, Tailwind CSS
- Content: MDX files in `content/`, front matter validated with zod at build time
- Fonts via `next/font/google`: Schibsted Grotesk, IBM Plex Mono, Source Serif 4
- Contact form: route handler, zod, honeypot, Upstash rate limit, Resend
- Hosting: Vercel. CI: GitHub Actions. Tests: Playwright smoke tests

## Folder structure

Follow section 6.2 of `docs/PLAN.md`: `app/`, `components/{ui,layout,sections}`, `content/{projects,posts}`, `lib/`, `public/`, `tests/`. Do not invent new top-level folders.

## Rules

1. **One slice per task.** Do only what the task asks. No extra pages, features, animations or dependencies.
2. **Plan, then code.** For any task touching more than 3 files, list the files you will change first.
3. **TypeScript strict.** No `any` without a comment explaining why.
4. **Design tokens only.** Colors, spacing and fonts come from CSS variables or Tailwind theme tokens. No raw hex values in components.
5. **One accent.** Vermilion is for buttons with large or bold text, rules, and the status dot. Text links use the accent-ink token. Never use the accent for body text.
6. **Anti-slop.** No Inter or Roboto, no gradients, no gradient text, no glassmorphism, no shadow stacks, no centred hero with two competing buttons, no emoji icons, no stock illustrations, no pulsing badges.
7. **Copy.** Never invent numbers, testimonials, links, client names or results. If content is missing, use a visible `TODO:` placeholder and tell me. Banned words: passionate, seamless, cutting-edge, innovative.
8. **Accessibility.** Semantic landmarks, one H1 per page, visible focus states, alt text, 4.5:1 text contrast, labelled form fields.
9. **Security.** No secrets in the repo. Environment variable names go in `.env.example` only. Never render user input as HTML.
10. **Dependencies.** Ask before adding any package. State what it does and its size.

## Workflow

- Work on a branch per task (`feat/...`, `fix/...`, `content/...`). Never commit to `main`.
- Conventional commits: `feat:`, `fix:`, `content:`, `chore:`, `docs:`, `test:`.
- Before saying a task is done, run `npm run lint`, `npm run typecheck` and `npm run build`, and report the real output. Do not claim success without running them.
- After each task, give a short summary: files changed, what to check in the browser, anything you were unsure about.

## Explain as you go

Ilman must be able to explain every line. Add short comments explaining why, not what. When you make a non-obvious decision, state it in the summary.
