# Codex, Cursor, and Hermes collaboration

GitHub is the only handoff surface between the Mac and VPS. Do not copy agent configuration, memory, sessions, skills, runtime secrets, or uncommitted work between machines.

## Ownership

| Environment | Primary role | Branch prefix |
| --- | --- | --- |
| Codex on Mac | Implementation, verification, and code review | `codex/` |
| Cursor on Mac | Human-guided exploration and visual/UI iteration | `cursor/` |
| Hermes on VPS | Orchestration, issue tracking, monitoring, and Codex delegation | `hermes/` |

One issue has one active implementing environment. Never edit the same branch concurrently from two checkouts.

## Lifecycle

1. Read the complete issue and repository instructions.
2. Claim the issue before the first code change.
3. Create a feature branch from current `origin/main`.
4. Implement and verify in one isolated checkout or worktree.
5. Push the feature branch and open a Draft PR.
6. Hand off through the issue, branch, commit, and PR.
7. Merge only after explicit human approval and passing required checks.

## Boundaries

- Never work directly on `main`.
- Never place secrets in Git, issues, PRs, logs, or agent handoffs.
- Preserve unrelated local changes.
- Hermes may delegate implementation to Codex CLI on the VPS but must not duplicate Codex's edits.
- If a task outgrows one fresh context, split it into independently demonstrable tickets.

## Hermes skill discovery

Keep a separate checkout or worktree on the VPS and point Hermes at this repository's skills:

```sh
hermes config set skills.external_dirs /absolute/path/to/next-portfolio/.agents/skills
```

Use a plain absolute path. After switching checkouts or branches, confirm that the configured path exists, start a fresh Hermes session, and load `ship-feature`. Do not copy these skills into `~/.hermes/skills`.
