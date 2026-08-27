# BTD / Product & Technology

BTD builds and operates owned digital products and selected end-to-end systems. Its method connects product judgment, full-stack delivery, bounded automation and AI, and responsible operations.

## Local verification

Use pnpm only:

```bash
pnpm install --frozen-lockfile
pnpm run test
pnpm run lint
pnpm run typecheck
pnpm run build
pnpm audit --prod
```

Run the production build locally with `pnpm start`. The public shell is Hebrew-first RTL and has a complete English/LTR toggle, persistent light/dark theme, accessible skip link, keyboard-friendly internal review modal, reduced-motion support, responsive layout, and bilingual custom 404.

The review CTA is intentionally non-transactional: it opens an internal review-state modal and collects or sends nothing.
