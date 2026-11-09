# Ilman Fazny Official Site: Full Project Document

Domain: ilmanfazny.com | Version 1.0 | 9 Nov 2026 | Status: ready to build

This document covers product definition, design, architecture, the software engineering plan, SEO, security, testing, timeline and risks. It replaces the earlier final plan.

## 1. Product definition

### 1.1 Goals

- **Primary:** get hired (internship or job) by making a recruiter trust you within 30 seconds.
- **Secondary:** win freelance clients with real proof.
- **Tertiary:** build a public record of your thinking through blog posts.

### 1.2 Success metrics (check 30 days after launch)

| Metric | Target |
| --- | --- |
| Lighthouse mobile (all key pages) | 90+ in every category |
| Contact form submissions | 3+ real enquiries |
| Resume downloads | 20+ |
| Case study pages read to the end | tracked via scroll event |
| Share preview works | WhatsApp, LinkedIn, X all show a correct card |

### 1.3 Audiences

- **Recruiters (30-second scan):** need stack, three real projects with links, resume PDF, availability and contact. They want proof and brevity.
- **Clients:** need proof of real work, clear offers, low-friction contact, a response promise.
- **Peers and interviewers:** may read the code and the blog, so the repo must be clean.

### 1.4 Positioning

> Software engineer. I build backend and full-stack systems for real businesses.

Rules:

- Speak in what you shipped, with real numbers, never adjectives.
- Do not use "intern" or "student" in the hero or project pages. State education honestly on About and the resume, and in one small label in the proof strip.
- State every role by its real title on About and the resume. Never inflate years or titles. A recruiter will compare the site with LinkedIn.
- Media is supporting, not the headline. It lives in one quiet section and one line in Services.

### 1.5 Brand and naming

- Brand: **Ilman Fazny**.
- Collaborations shown as proof: Lumora, Ark, Chiselled.
- **WOI** (Work of Ilman) is only a label for your own showcase work. No separate company identity yet. If it becomes real, move it to `woi.ilmanfazny.com`.
- Spell "Solutions" correctly on anything public.
- Handles: GitHub `ilman-fazny`. LinkedIn: confirm `ilman_fazny` is valid, since LinkedIn custom URLs normally use hyphens. Pick one form and use it everywhere.
- Email: `hello@ilmanfazny.com`, receiving through registrar forwarding or Cloudflare Email Routing, sending through Gmail "Send mail as" with an SMTP service, so replies also come from the site address.

## 2. Requirements

### 2.1 Functional requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| F1 | Home page with hero, proof strip, 3 featured projects, services teaser, short about, contact CTA | Must |
| F2 | Project index and case study pages built from MDX | Must |
| F3 | Work page for collaborations (Lumora, Ark, Chiselled) and WOI | Must |
| F4 | About page with story, stack, honest education and roles | Must |
| F5 | Contact page with a 3-field form (name, email, message) | Must |
| F6 | Resume page with a PDF download | Must |
| F7 | Availability status shown only while true | Should |
| F8 | Blog index and post pages in MDX | Could (post-launch) |
| F9 | Services page with three offers | Could (post-launch) |
| F10 | Dark mode toggle | Could (post-launch) |
| F11 | Testimonials near Contact | Should (once received) |
| F12 | Custom 404 page | Must |

### 2.2 Non-functional requirements

- **Performance:** Lighthouse 90+ on mobile. LCP under 2.5 s on a mid-range phone with a normal connection. CLS under 0.1.
- **Accessibility:** WCAG 2.2 AA as the target. Keyboard navigable, visible focus states, alt text, labelled form fields, text contrast 4.5:1.
- **SEO:** per-page metadata, sitemap, robots, Open Graph images, JSON-LD.
- **Security:** no secrets in the repo, security headers, validated and rate-limited form.
- **Maintainability:** strict TypeScript, linted, content as files, no CMS.
- **Responsive:** designed mobile first. Test at 360, 768, 1280 and 1920 px wide.
- **Cost:** free or near-free (domain plus free tiers).

### 2.3 Out of scope for v1

CMS, user accounts, comments, newsletter, prices on the site, multilingual versions, animations beyond simple transitions, separate WOI identity.

## 3. Information architecture

### 3.1 Site map

- `/` Home
- `/projects` and `/projects/[slug]` case studies
- `/work` collaborations and WOI
- `/services` (post-launch)
- `/blog` and `/blog/[slug]` (post-launch)
- `/about`
- `/contact`
- `/resume`
- `/404`

Max 6 navigation items: Projects, Work, Services, Blog, About, Contact. Until Services and Blog ship, hide them rather than linking to empty pages. Resume is a visible button or footer link, not a nav item.

### 3.2 Home page order

1. Hero: positioning line, availability status, one primary CTA (Contact), one secondary link (Resume).
2. Proof strip: stack, three real numbers, education line.
3. Three featured projects.
4. Services teaser (post-launch).
5. Latest two posts (post-launch).
6. Short about.
7. Contact CTA.

### 3.3 Page specifications

**Projects index.** An indexed table: `01 Zentage - FastAPI - 2026`. Columns: number, name, main stack, year, status. Hover shows a preview on desktop. On mobile, rows are plain links.

**Case study template.** Client lens first, recruiter lens below.

- One-line summary
- The problem
- What was built (3 to 5 bullets)
- Result (one real number)
- Stack, your role, key technical decisions
- Live link, repo or demo video
- Screenshots in simple frames

**Work.** Two groups: Collaborations (Lumora, Ark, Chiselled) and WOI (own showcase). Cards with a one-line description, year and link. Video via lazy-loaded embeds.

**About.** Short story, stack, education, current roles by their real titles, headshot, links.

**Contact.** Three fields, response promise ("I reply within 24 hours"), email address, GitHub and LinkedIn links.

**Resume.** A web version plus a PDF download. Keep the PDF in `public/` with a versioned file name.

## 4. Content plan

### 4.1 Featured projects

| Project | Role in the site | Notes |
| --- | --- | --- |
| Zentage | Flagship backend proof | FastAPI seat booking system, JWT and RBAC. Define "600+ users" precisely (registered, active, or concurrent) before publishing. |
| POS for New Universal Computers, Matara | Real business use | Offline desktop app, so no live link. Use a demo video or screenshots and a sanitised README. Get written permission from the client. Needs one real result. |
| Qwenz Home | E-commerce build | Label "In build" until the MVP is live. Publish user numbers only once real. Case study after launch. |

Add a small "More work" row with finished coursework or personal projects (for example SmartCampusAPI, CleanSL, the loan approval ML project), one line each. This gives recruiters breadth when one featured project is still in build.

### 4.2 Freelance offers

Three packages, no prices at launch:

- Business website (fast, SEO-ready, easy to update)
- E-commerce store (catalogue, payments, admin)
- Custom system (POS, booking, dashboards)

Media and content is an optional add-on. Copy: "Tell me about your project. I reply within 24 hours." Add "starting from" prices later once you know your numbers.

### 4.3 Availability

Show a status only, for example "Available for freelance projects". Do not publish hours. Show it only while true. Make it one config value in `lib/site.ts`, so it is a one-line change.

### 4.4 Blog (post-launch)

Target two finished posts before the blog goes live. Candidate topics: how the seat booking system prevents double booking, building an offline-first POS, lessons from your first paid projects. Write for readers who may hire you.

### 4.5 Voice rules

- Numbers beat adjectives. "600+ users" beats "popular".
- Banned words: passionate, seamless, cutting-edge, innovative, synergy.
- Swap test: replace your name with someone else's. If the sentence still fits, rewrite it.
- Short sentences. Active voice. No filler.

## 5. Design system: "Spec sheet"

The site looks like precise engineering documentation, not a startup landing page.

### 5.1 Colors

| Token | Light | Dark (post-launch) |
| --- | --- | --- |
| background | #ECEEF1 | #0E1013 |
| surface | #F7F8FA | to define |
| ink | #0F1115 | #E8E9EB |
| muted | #5A606B | to define |
| rules | #CDD1D8 | to define |
| accent | #F03A17 (vermilion) | same |
| accent-ink | about #C22A0C (for text links; verify) | to define |
| status | #1F9D55 (availability dot only) | same |

**Accent contrast warning.** Vermilion on the light background is about 3.4:1, and white on vermilion is about 3.9:1. Both fail 4.5:1 for normal text. Use vermilion only for buttons with large or bold text, rules, the status dot and highlights. For text links use accent-ink and test it with a contrast checker. One accent only, and only the primary CTA uses it.

### 5.2 Typography

- Schibsted Grotesk for headings and UI.
- IBM Plex Mono for labels and numbers.
- Source Serif 4 for blog body.
- Base size 17 px, scale ratio 1.25.
- Load through `next/font/google` with a system fallback. Verify rendering on a phone, especially small mono labels.

### 5.3 Layout rules

- Left-aligned asymmetric hero, not centred.
- Numbered mono section labels (`01 / Projects`), 1 px rules, radius 2 to 4 px.
- Registration-mark corners as the single signature detail.
- Real screenshots in simple frames.
- Spacing on a 4 px grid. Content max width about 1100 px, reading width about 65 characters for text.

### 5.4 Anti-slop list (checked before every page is done)

No Inter or Roboto, no purple or indigo gradient, no gradient text, no centred hero with two competing buttons, no three emoji-icon cards, no shadow soup, no glassmorphism, no pulsing "Live" badges, no stock illustrations, no filler copy.

### 5.5 Design process

Figma for three key screens only: Home, a case study, Contact. Build a style tile first (colors, type, buttons, one card, registration-mark detail), then check contrast and fonts in a real browser before locking.

## 6. Technical architecture

### 6.1 Stack

| Concern | Choice | Reason |
| --- | --- | --- |
| Framework | Next.js (App Router), React, TypeScript strict | Matches your path, static output, good SEO |
| Styling | Tailwind CSS with design tokens as CSS variables | Fast, consistent |
| Content | MDX files in the repo (gray-matter and next-mdx-remote, or @next/mdx) | No CMS, versioned in git |
| Content validation | zod schemas for front matter, checked at build | Broken content fails the build |
| Fonts and images | `next/font`, `next/image` | Performance |
| Video | YouTube or Vimeo, lazy-loaded embeds | No self-hosted video cost |
| Forms | Route handler, zod, honeypot, rate limiting, Resend | Simple and safe |
| Rate limit store | Upstash Redis (free tier) or Vercel KV | In-memory limits do not work on serverless |
| Hosting | Vercel | Preview deploys, free tier |
| Analytics | Plausible or Vercel Analytics | Privacy-friendly |
| CI | GitHub Actions | Lint, type check, tests |
| Tests | Playwright smoke tests | Catches broken pages and forms |

### 6.2 Folder structure

```
ilmanfazny/
  app/
    layout.tsx
    page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    work/page.tsx
    about/page.tsx
    contact/page.tsx
    resume/page.tsx
    blog/ ...            (post-launch)
    services/ ...        (post-launch)
    api/contact/route.ts
    sitemap.ts
    robots.ts
    not-found.tsx
    opengraph-image.tsx
  components/
    ui/                  (Button, Frame, Label, RegMarks)
    layout/              (Header, Footer, Nav)
    sections/            (Hero, ProofStrip, ProjectTable ...)
  content/
    projects/*.mdx
    posts/*.mdx
  lib/
    content.ts           (read and validate MDX)
    schemas.ts           (zod schemas)
    site.ts              (name, links, availability flag)
    ratelimit.ts
    email.ts
  public/
    resume/ images/ favicon
  tests/
    smoke.spec.ts
  .github/workflows/ci.yml
```

### 6.3 Rendering strategy

- All content pages are statically generated at build time (`generateStaticParams` for slugs).
- Only `/api/contact` runs on the server.
- Metadata through `generateMetadata` per page.
- No client-side data fetching for content.

### 6.4 Content model

Project front matter:

```yaml
title: Zentage
slug: zentage
summary: One-line summary
year: 2026
status: shipped        # shipped | in-build
stack: [FastAPI, PostgreSQL, JWT]
role: Backend developer
result: "600+ users"
links:
  live: https://...
  repo: https://...
featured: true
order: 1
```

Post front matter: `title`, `slug`, `date`, `summary`, `tags`, `draft`. The build must fail if a required field is missing. Drafts are excluded from the sitemap and listings.

### 6.5 Contact form flow

1. Client submits name, email and message.
2. Route handler checks the honeypot field. If filled, it returns success without sending.
3. Rate limit by IP (for example 5 per hour) using Upstash.
4. Validate with zod: name 2 to 80 characters, valid email, message 10 to 2000 characters.
5. Send through Resend to your inbox, with reply-to set to the visitor.
6. Return a generic success or error. Never expose internal errors.
7. Optional: add Cloudflare Turnstile if spam appears.

Environment variables (never committed): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`. Keep an `.env.example` with names only.

### 6.6 Architecture overview

```
Visitor browser
   |
   v
Vercel edge / CDN  --->  static pages (HTML, JS, images)
   |
   +--> /api/contact (serverless)
          |--> Upstash Redis (rate limit)
          |--> Resend (email) --> your inbox

Build time: content/*.mdx --> zod validation --> static pages, sitemap, OG images
```

## 7. Software engineering plan

### 7.1 Process

- Iterative delivery with small vertical slices. Each slice is a working page or feature, deployed to a preview.
- Planning tool: a GitHub Project board with columns Backlog, This week, In progress, Review, Done. Each task is one issue.
- Weekly review every Sunday: what shipped, what slipped, adjust the next week.
- **Priority rule:** the Qwenz Home paying client deadline always comes before the site. If it slips, the site slips.

### 7.2 Git workflow

- `main` is always deployable and protected (no direct pushes once CI exists).
- Feature branches: `feat/home-hero`, `fix/contact-validation`, `content/zentage-case-study`.
- Pull requests into `main`, even working solo. They trigger preview deploys and CI, and the history reads well to a recruiter.
- Conventional commits: `feat:`, `fix:`, `content:`, `chore:`, `docs:`, `test:`.
- Small commits, one idea each. Squash merge.

### 7.3 Environments

| Environment | Where | Purpose |
| --- | --- | --- |
| Local | `npm run dev` | Development |
| Preview | Vercel, per branch | Review and phone testing |
| Production | Vercel, `main`, ilmanfazny.com | Live site |

### 7.4 Quality gates (CI on every push)

1. `npm run lint`
2. `npm run typecheck` (`tsc --noEmit`)
3. `npm run build`
4. Playwright smoke tests against the build

A failing step blocks merging.

### 7.5 Testing strategy

- **Smoke tests (Playwright):** home loads, navigation works, a project page loads, resume link returns a file, contact form submits (with the email call mocked), 404 page works, no broken internal links.
- **Content validation:** zod at build time.
- **Manual:** real phone test (Android and iPhone if possible), keyboard-only pass, screen reader spot check.
- **Lighthouse:** run on Home, a case study and Contact. Record scores in the PR.
- **Accessibility:** axe check on key pages.
- Keep it light. Do not build a large test suite for an 8-page site, but do not skip the smoke tests.

### 7.6 Definition of done (per page)

- Matches the Figma screen or style tile.
- Passes the anti-slop list and the swap test.
- Responsive at 360, 768, 1280 px.
- Keyboard accessible, contrast checked.
- Metadata and OG image set.
- CI green, preview reviewed on a phone.
- Copy contains no unverified claims.

### 7.7 Code standards

- TypeScript strict, no `any` without a comment.
- Small components, one responsibility each.
- Design tokens only. No raw hex values in components.
- No unused dependencies. Review every new package for size and maintenance.
- Comments explain why, not what.
- Pin Node version in `.nvmrc` and `engines`.

### 7.8 Documentation

The repo README covers what the site is, how to run it, folder structure, how to add a project or post, environment variables, and deploy steps. A short `CONTRIBUTING` or `docs/` note covers the content schema. Recruiters read READMEs.

## 8. Security plan

- Security headers in `next.config`: Content-Security-Policy (start in report-only mode, then enforce), `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` or `frame-ancestors`, HSTS (Vercel handles HTTPS).
- No secrets in the repo. Use Vercel environment variables. Run a secrets scan (GitHub secret scanning) before the repo goes public.
- Contact form: zod validation, honeypot, rate limiting, no HTML rendered from user input, escape content in the email template.
- Dependencies: enable Dependabot, run `npm audit` in CI.
- Domain: enable registrar two-factor authentication and auto-renew. Use two-factor on GitHub, Vercel and your email.
- Email spoofing protection: set SPF, DKIM and DMARC records for the sending service.
- Client work: publish only with written permission, and remove anything confidential from screenshots and READMEs.

## 9. Performance plan

- Static generation for all content pages.
- `next/image` with explicit sizes and modern formats. Hero image priority-loaded, others lazy.
- Fonts via `next/font` with `display: swap`, limited weights.
- Minimal client JavaScript. Interactivity limited to nav, hover preview, form, theme toggle.
- YouTube and Vimeo embeds lazy-loaded behind a poster image.
- Budget: under 150 KB of JavaScript on first load for Home, images under 200 KB each where possible.
- Test on a throttled mobile profile and a real phone.

## 10. SEO and discoverability plan

- **Titles and descriptions:** unique per page. Pattern: `Page title | Ilman Fazny`. Descriptions under 160 characters.
- **Technical:** `sitemap.ts`, `robots.ts`, canonical URLs, clean slugs, `lang` attribute, one H1 per page.
- **Structured data:** JSON-LD `Person` on Home and About (name, URL, jobTitle, sameAs for GitHub and LinkedIn). Add `Article` for posts later.
- **Open Graph and Twitter cards:** dynamic images through `opengraph-image.tsx`. Test in WhatsApp and LinkedIn.
- **Search engines:** verify the domain in Google Search Console and Bing Webmaster Tools, then submit the sitemap.
- **Target query:** your own name first ("Ilman Fazny"). Then long-tail terms for services and location once the Services page ships.
- **Off-site signals:** link the site from GitHub, LinkedIn, Instagram and each collaborator's site where they agree. Consistent name and handles help search engines connect your profiles.
- **Content:** two useful blog posts, each answering a specific question.

## 11. Accessibility plan

- Semantic landmarks (`header`, `nav`, `main`, `footer`), proper heading order.
- Visible focus ring that works on both light and dark.
- Skip-to-content link.
- Alt text for every meaningful image. Decorative registration marks hidden from assistive tech.
- Form labels, error messages linked with `aria-describedby`, not colour only.
- Respect `prefers-reduced-motion`.
- Touch targets at least 44 px.
- Do not use red alone to signal errors on the form. Use text and an icon.

## 12. Analytics and measurement

- Plausible or Vercel Analytics (no cookie banner needed for basic use).
- Custom events: contact submit, resume download, project click, outbound link to repo.
- Review monthly. Look at which projects get read, where visitors drop, and which referrers send traffic.

## 13. Timeline

The Qwenz Home MVP (about the end of November) is a paying deadline, so it comes first. The site gets a protected block of about 2 hours per weekday plus weekend sessions. Realistic launch window: **25 Nov to 2 Dec**.

| Phase | Dates | Deliverables |
| --- | --- | --- |
| 0. Setup | 9 to 11 Nov | Buy domain, create repo, scaffold Next.js, deploy empty site to Vercel, style tile, contrast check |
| 1. Design and first case study | 12 to 15 Nov | Figma for 3 screens, Zentage case study written, case study template built |
| 2. Core build | 16 to 22 Nov | Home, Projects, Contact form with rate limit and Resend, Resume, About |
| 3. Remaining content | 23 to 28 Nov | POS case study, Work page, headshot, SEO, tests, CI, launch checklist |
| 4. Launch | by 2 Dec | Connect domain, final QA on a real phone, share-preview test, announce on LinkedIn |
| 5. After launch | Dec onward | Qwenz case study, Services page, blog with 2 posts, testimonials, dark mode |

**Cut rule:** if time slips, cut in this order: dark mode, blog, services page, hover previews. Never cut the case studies.

## 14. Launch checklist

**Content**

- [ ] Zentage and POS case studies final, every claim verified
- [ ] Client permission for each published project
- [ ] Headshot added
- [ ] Resume PDF current and linked
- [ ] Roles and education stated by real titles and match LinkedIn

**Technical**

- [ ] CI green, preview deploy reviewed
- [ ] Playwright smoke tests pass
- [ ] Lighthouse 90+ on mobile for Home, a case study, Contact
- [ ] Security headers verified, no secrets in repo
- [ ] Contact form tested end to end (including rate limit and spam honeypot)
- [ ] Email sending works from hello@ilmanfazny.com, SPF, DKIM, DMARC set
- [ ] 404 page, favicon, sitemap, robots, canonical URLs
- [ ] Analytics running

**Quality**

- [ ] Anti-slop list passed on every page
- [ ] Swap test, subtraction pass, squint test
- [ ] Keyboard-only pass and contrast check
- [ ] Tested on a real Android phone and an iPhone if available
- [ ] Share preview checked in WhatsApp and LinkedIn
- [ ] Search Console verified and sitemap submitted

No process removes every bug. This checklist is how we catch them before visitors do.

## 15. Risk register

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Qwenz deadline eats site time | High | High | Protect Qwenz hours first, apply the cut rule, launch window not a fixed date |
| Case studies lack real results or links | Medium | High | Collect POS result and links this week, write Zentage first |
| Client does not permit publishing a project | Medium | Medium | Ask now, prepare a sanitised version, or anonymise |
| Scope creep (animations, CMS, extra pages) | High | Medium | Out-of-scope list, definition of done, cut rule |
| Accent colour fails accessibility | Certain unless fixed | Medium | Use accent-ink for text, test on the style tile |
| Form spam or abuse | Medium | Low | Honeypot, rate limit, Turnstile if needed |
| Email replies come from personal address | Medium | Low | Set up Send mail as with SMTP |
| Claims on the site do not match LinkedIn or reality | Low | High | Verify every number and title before publishing |
| Burnout alongside uni and work | Medium | High | Fixed daily block, weekly review, cut early rather than late |
| Domain or hosting lapses | Low | High | Auto-renew, two-factor, calendar reminder |

## 16. Open items (blocking)

1. Buy the domain and note the registrar and renewal price.
2. Live links, repos or demo videos for Zentage and POS.
3. One real result for the POS and a precise definition of Zentage's "600+ users".
4. Written permission from New Universal Computers, Qwenz Home, Lumora, Ark and Chiselled to show their work.
5. Headshot: shoulders up, plain background, natural window light. A phone is fine.
6. One or two testimonial quotes.
7. Confirm vermilion and accent-ink on the style tile.
8. Decide the LinkedIn handle format.

## 17. Post-launch roadmap

1. Qwenz Home case study once the MVP is live, with real numbers only.
2. Services page with the three offers.
3. Blog with two finished posts, then one post a month if sustainable.
4. Testimonials near Contact.
5. Dark mode toggle.
6. "Starting from" pricing once your numbers are clear.
7. Move WOI to its own subdomain only if it becomes a real outfit.

## 18. How we build

- You hand-code the core, one step at a time. You run it, paste the real terminal output, then we go to the next step.
- Figma first for the three key screens only.
- Every page is checked against the anti-slop list and the definition of done before it counts as finished.
- Immediate next step: Node 20.9 or newer installed, GitHub repo created, `npx create-next-app@latest ilmanfazny` run, dev server confirmed on `localhost:3000`.
