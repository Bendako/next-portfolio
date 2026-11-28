# BTDLabs / Product & Technology

BTDLabs builds and operates owned digital products and selected end-to-end systems. Its method connects product judgment, full-stack delivery, bounded automation and AI, and responsible operations.

## Local verification

Use Node.js 22.18+ and pnpm only (matching CI):

```bash
pnpm install --frozen-lockfile
pnpm exec playwright install --with-deps chromium firefox webkit
pnpm run test
pnpm run lint
pnpm run typecheck
pnpm run build
pnpm run test:e2e
pnpm audit --prod
```

Run the production build locally with `pnpm start`. The public shell is Hebrew-first with a stable RTL layout, bilingual copy at `/` (Hebrew) and `/en` (English), persistent light/dark theme, Heebo body type, accessible skip link, reduced-motion support, responsive layout, bilingual custom 404, and work, about, and contact sections. Language toggle does not mirror the page. Contact is mailto + copy-email only — no form.

Language is determined by the URL so both versions can be shared and rendered with matching metadata. Both keep `dir="rtl"`. The language toggle preserves the current section anchor; theme preferences remain local to the browser. Site origin is configured in `lib/site.ts`.

Both homepages are prerendered through `app/[locale]/layout.tsx` and `app/[locale]/page.tsx`. The proxy maps `/` to the internal Hebrew route; canonical URLs stay `/` and `/en`. Static content stays in the server shell, with small client components for language, theme, and copying. Localized missing routes retain the selected language when returning home.

End-to-end checks run in Chromium, Firefox, and WebKit, including axe accessibility checks for both languages and themes. Case-study copy describes documented project capabilities; it does not claim unverified business results.
