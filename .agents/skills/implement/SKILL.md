---
name: implement
description: "Implement a piece of work based on a spec or set of tickets."
disable-model-invocation: true
---

Implement the work described by the user in the spec or tickets.

Before editing:

1. Read `AGENTS.md`, `docs/agents/collaboration.md`, the source issue/spec, and relevant domain docs.
2. Confirm the issue is assigned to the acting GitHub user. If it is not, claim it before branching or editing; assignment is the first remote write.
3. Confirm the worktree is not on `main` or `master`. If it is, create a feature branch following the project collaboration rules before making any change.
4. Preserve unrelated user changes. Stop if they overlap the requested work and cannot be isolated safely.

Use /tdd where possible, at pre-agreed seams.

Run typechecking regularly, single test files regularly, and the full test suite once at the end.

Once done, use /code-review to review the work.

Commit verified work to the current feature branch. Never push directly to `main`/`master`, merge a PR, or delete a branch unless the user explicitly asks.
