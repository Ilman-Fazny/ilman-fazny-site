# Ilman Fazny Official Site (ilmanfazny.com)

Personal site for Ilman Fazny: portfolio, case studies, freelance offers, and writing.
Designed with a "Spec sheet" engineering aesthetic—clean typography, verified metrics, and zero marketing buzzwords.

## Stack

- **Framework:** Next.js (App Router), React 19, TypeScript (strict)
- **Styling:** Tailwind CSS v4 with design tokens mapped to CSS variables
- **Content:** Local MDX with Zod schema validation at build time
- **Fonts:** Schibsted Grotesk (UI/headings), IBM Plex Mono (numbers/labels) via `next/font/google`
- **CI/CD:** GitHub Actions and Vercel

## Requirements

- Node.js `22.x` (see `.nvmrc`)
- npm `10.x` or newer

## Getting Started

Install dependencies:
```bash
npm ci
```

Start the local development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Quality Gates

Before pushing or opening a PR, ensure all checks pass:

```bash
npm run lint       # Run ESLint check
npm run typecheck  # Run TypeScript compiler check
npm run build      # Test production build
```

## Folder Structure

```text
app/                 Next.js App Router pages and layouts
components/
  ui/                Base UI primitives (Button, Frame, RegMarks)
  layout/            Layout chrome (Header, Footer, Nav)
  sections/          Page section blocks
content/
  projects/          Project MDX case studies
  posts/             Blog post MDX files
lib/                 Shared utilities, schemas, and helpers
public/              Static assets (resume PDF, images, favicon)
tests/               Playwright smoke tests
.github/workflows/   CI validation pipeline
```
