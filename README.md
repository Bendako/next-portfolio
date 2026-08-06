# Portfolio Home Shell

A bilingual, evidence-led portfolio shell positioning Ben Dako as a Hybrid
Product Builder under the SYSTEMS / BTD identity. The layout remains RTL so
elements keep their positions while visitors switch the interface language,
and light or dark theme preferences persist.

The site deploys to production on Vercel from `main`. A GitHub Actions
workflow (`.github/workflows/ci.yml`) runs the full verification suite on
every pull request and push to `main`.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Shadcn UI
- Framer Motion

## Local setup

Use pnpm only; `package-lock.json` is intentionally not used.

```bash
pnpm install --frozen-lockfile
pnpm exec playwright install chromium
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
pnpm run test:e2e
pnpm audit --prod
```

For local development:

```bash
pnpm run dev
```

To exercise the production build locally:

```bash
pnpm run build
pnpm start
```

## Home shell behavior

- Hebrew-first content with a complete English toggle and a stable RTL layout.
  The locale is stored as `portfolio-locale` (`he` or `en`); missing or invalid
  values fall back to Hebrew. Changing the locale updates the document language
  without mirroring the interface.
- Light/dark mode uses a stored `theme` value first, then the operating-system
  preference. Invalid values safely fall back to the system preference.
- Header anchors lead to Work, About, and Contact sections on the same page.
- Exactly three evidence-backed capability panels and two public-safe featured
  work cards: נווה בשדרה and the internal AI-agent/SBEA system.
- A compact public-proof ledger links to three selected projects: Next.js
  Starter MCP, Jobs Center, and LetterBlast. Unavailable demos are omitted
  instead of publishing broken links.
- Direct email, GitHub, and LinkedIn links only. There is no contact form or
  contact API.
- Visible keyboard focus, a skip link, reduced-motion rules, responsive layouts,
  and a custom bilingual/theme-aware 404.
- Branded Open Graph / Twitter cards (`summary_large_image`) generated from
  `app/opengraph-image.tsx` with `metadataBase` pointing at the live site URL.

Substantive Hebrew and English copy is centralized and type-checked in
`data/portfolio.ts`.

## Verification

CI runs the gates above automatically on every pull request. For a manual
pass, run them locally, then use the production server to inspect `/` and a
missing route. Check both languages and themes at 360, 768, 1280, and 1440 CSS
pixels, including anchor targets, keyboard focus, persistence after reload,
horizontal overflow, reduced-motion behavior, and the browser console.

## Contact

Email: bendk1994@gmail.com  
GitHub: https://github.com/Bendako  
LinkedIn: https://www.linkedin.com/in/bendako/
