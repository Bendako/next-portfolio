# Portfolio Home Shell

A bilingual, evidence-led portfolio shell positioning Ben Dako as a Hybrid
Product Builder. Hebrew/RTL is the default; visitors can switch the complete
interface to English/LTR and choose a persistent light or dark theme.

This working tree is a local release candidate. It has not been deployed by
this implementation task.

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
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
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

- Hebrew-first RTL with a complete English LTR toggle. The locale is stored as
  `portfolio-locale` (`he` or `en`); missing or invalid values fall back to
  Hebrew.
- Light/dark mode uses a stored `theme` value first, then the operating-system
  preference. Invalid values safely fall back to the system preference.
- Header anchors lead to Work, About, and Contact sections on the same page.
- Exactly three evidence-backed capability panels and two public-safe featured
  work cards: נווה בשדרה and the internal AI-agent/SBEA system.
- Direct email, GitHub, and LinkedIn links only. There is no contact form or
  contact API.
- Visible keyboard focus, a skip link, reduced-motion rules, responsive layouts,
  and a custom bilingual/theme-aware 404.

Substantive Hebrew and English copy is centralized and type-checked in
`data/portfolio.ts`.

## Verification

Run the static gates above, then use the production server to inspect `/` and a
missing route. Check both languages and themes at 360, 768, 1280, and 1440 CSS
pixels, including anchor targets, keyboard focus, persistence after reload,
horizontal overflow, reduced-motion behavior, and the browser console.

## Contact

Email: bendk1994@gmail.com  
GitHub: https://github.com/Bendako  
LinkedIn: https://www.linkedin.com/in/bendako/