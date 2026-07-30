# Agent instructions — next-portfolio

Instructions for AI assistants working on this repository. Keep project facts here concise and current; keep reusable procedures under `.agents/skills/`.

## Project at a glance

- Personal portfolio for Ben Dako.
- Current stack: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3, Radix/shadcn-style UI primitives, Framer Motion, and Nodemailer.
- Package manager: pnpm 9.15.4, pinned in `package.json`.
- User-facing content is currently English and left-to-right.

## Repository layout

- `app/` — App Router pages, layout, global styles, and server endpoints.
- `components/` — reusable page sections and UI components.
- `components/ui/` — shared UI primitives.
- `hooks/` — client-side React hooks.
- `lib/` — shared utilities.
- `public/` — static images and downloadable portfolio assets.
- `types/` — project-level TypeScript declarations.

The `@/*` path alias resolves from the repository root.

## Commands

- Install: `corepack pnpm install --frozen-lockfile`
- Development: `pnpm run dev`
- Lint: `pnpm run lint`
- Type-check: `pnpm run typecheck`
- Build: `pnpm run build`

There is no automated test suite on `main` yet. Do not report tests as passing when no tests ran. For behavioral logic or bug fixes, agree on a test seam and add a focused test before implementation when practical.

## Agent workflow

### Issue tracker

Specs and implementation tickets live in GitHub Issues for `Bendako/next-portfolio`. See `docs/agents/issue-tracker.md`.

### Cross-environment collaboration

Codex, Cursor, and Hermes work in separate checkouts or worktrees and on separate feature branches. GitHub Issues, branches, commits, and pull requests are the only handoff surface between the Mac and VPS. See `docs/agents/collaboration.md`.

### Domain documentation

Use a root `CONTEXT.md` for durable portfolio vocabulary and `docs/adr/` for consequential architectural decisions. Create them only when a real term or decision needs to be recorded. See `docs/agents/domain.md`.

## Working rules

1. Read the full issue and these instructions before editing.
2. Inspect existing patterns before proposing a change.
3. For non-trivial work, describe the files, data flow, edge cases, and verification plan before editing.
4. Make the smallest change that satisfies the approved issue.
5. Do not refactor or reformat unrelated code.
6. Do not add or upgrade dependencies without explaining the need and receiving approval.
7. Never edit or commit `.env` files, credentials, tokens, deployment secrets, or generated local state.
8. Preserve unrelated local changes and stop if they overlap the task.
9. Do not suppress TypeScript or lint errors.
10. Do not claim a user flow works unless it was exercised end to end.

## Git rules

- Never implement directly on `main`.
- One approved issue has one active implementing environment and one feature branch:
  - `codex/<issue>-<slug>`
  - `cursor/<issue>-<slug>`
  - `hermes/<issue>-<slug>`
- Claim the issue before the first code change.
- Keep commits focused and reference the issue.
- Push a feature branch and open a Draft PR.
- Never merge, delete branches, or rewrite shared history without explicit human approval.

## Next.js and React

- Default to Server Components. Add `"use client"` only for interactivity, browser APIs, animation, theme state, or React hooks.
- Keep client boundaries as small as practical.
- Use framework conventions for pages, layouts, metadata, images, and route handlers.
- Framework-required default exports are allowed for pages and layouts; prefer named exports elsewhere.
- Keep server-only functionality, including email delivery and credentials, out of client bundles.
- Preserve accessibility semantics, keyboard behavior, responsive layouts, dark mode, and reduced-motion behavior.

## Styling and content

- Match the existing visual language before introducing a new pattern.
- Reuse components and utilities before creating duplicates.
- Keep user-facing copy consistent in tone and language.
- Verify mobile and desktop layouts for visible changes.
- Use semantic HTML and accessible labels; do not rely on animation or color alone to communicate state.

## Contact and external links

- Treat contact-form input as untrusted.
- Validate requests server-side before sending email.
- Keep mail credentials and recipient configuration in environment variables.
- Preserve safe external-link behavior and do not expose private contact or deployment configuration in client code.

## Verification

Before reporting completion:

1. `pnpm run lint`
2. `pnpm run typecheck`
3. Relevant tests, when a test suite or focused test exists
4. `pnpm run build`
5. For user-facing changes, exercise the changed flow and inspect responsive behavior

Report exactly what ran, what passed, and what was not verified.

## Completion report

Include:

- issue, branch, commit, and Draft PR;
- files and behavior changed;
- commands and results;
- manual verification performed;
- security or deployment impact;
- remaining risks and follow-up work.
