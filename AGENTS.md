# AGENTS.md

Short instructions for coding agents working in this repository.
Human setup and product behavior live in `README.md` — prefer linking there over duplicating prose.

## Project

- Public portfolio for Ben Dako under the **SYSTEMS / BTD** identity.
- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, hand-rolled shell CSS.
- Hebrew-first content with a stable **RTL layout**; language toggle changes copy/`lang`/`dir="auto"` text, not page mirroring.
- Package manager: **pnpm only** (`packageManager` is pinned in `package.json`).

## Commands

```bash
pnpm install --frozen-lockfile
pnpm exec playwright install chromium   # once per machine / CI image
pnpm run lint
pnpm run typecheck
pnpm run test
pnpm run build
pnpm run test:e2e
pnpm audit --prod
pnpm run dev                            # local development
```

Before opening or updating a PR, run at least lint, typecheck, unit tests, and build. Run e2e when UI, locale/theme, layout, or metadata behavior changes.

## Git and delivery

1. Work on a feature branch (never commit directly to `main`).
2. Open a PR into `main`.
3. Wait for the required GitHub Actions job **`verify`** (`.github/workflows/ci.yml`) to pass.
4. Merge only when checks are green. `main` is branch-protected: no force-push, no deletion, PR required, `verify` required, branch must be up to date.

Keep commits focused. Do not commit secrets (`.env*`, credentials, tokens).

## Non-negotiables

- Do not force-push to `main` or delete `main`.
- Do not deploy to production or run production-only deploy commands unless the user explicitly asks.
- Do not invent contact forms, fake demos, or broken live links; omit unavailable demos.
- UI/branding changes must keep **SYSTEMS / BTD**, stable RTL shell, and bilingual content in `data/portfolio.ts` consistent.
- Do not add Hermes/Codex multi-agent skill trees or `.agents/skills` unless a ticket explicitly requests them (see closed #1; this file is the agent surface).

## Where things live

| Area | Path |
|------|------|
| Page shell | `components/PortfolioShell.tsx` |
| Copy (he/en) | `data/portfolio.ts` |
| Styles | `app/globals.css` |
| Metadata / OG | `app/layout.tsx`, `app/opengraph-image.tsx`, `app/twitter-image.tsx` |
| Unit tests | `tests/*.test.mjs` |
| E2E | `tests/e2e/`, `playwright.config.ts` |
| CI | `.github/workflows/ci.yml` |

## Scope discipline

Change only what the ticket or user request requires. No drive-by refactors, dependency bumps, or design rewrites unless asked.
