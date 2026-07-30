---
name: ship-feature
description: Ship one approved GitHub issue safely from claim through implementation, independent review, and a pull request. Use for cross-environment work by Codex, Cursor, or Hermes when the user asks to build, fix, or continue an agent-ready ticket.
---

# Ship Feature

Ship exactly one approved issue without allowing two environments to edit the same branch.

## Preconditions

1. Read `AGENTS.md`, `docs/agents/issue-tracker.md`, `docs/agents/domain.md`, and `docs/agents/collaboration.md`.
2. Fetch the complete GitHub issue, including comments and labels.
3. Confirm the issue has an approved scope and acceptance criteria. If it does not, route to `/grill-with-docs` or `/to-spec`; do not invent missing requirements.
4. Inspect the worktree. Preserve unrelated changes and stop if they overlap the ticket.
5. Never implement on `main` or `master`. Create or switch to one feature branch owned by the current environment:
   - `codex/<issue>-<slug>`
   - `cursor/<issue>-<slug>`
   - `hermes/<issue>-<slug>`

## Choose the executor

- **Hermes on the VPS:** orchestrate. Load the installed `codex` skill and delegate the implementation to Codex CLI in the VPS checkout. Pass the issue, branch, repository instructions, and verification commands. Hermes owns status reporting and GitHub coordination; it should not duplicate Codex's edits.
- **Codex or Cursor on the Mac:** implement directly in the current isolated checkout/worktree.

If the required executor is unavailable, stop and report the missing capability instead of silently changing the collaboration model.

## Execute

1. Claim the issue using the configured GitHub workflow. This is the first remote write.
2. Use `/implement`, or the equivalent installed TDD and review skills in Hermes.
3. Agree the test seams before adding tests.
4. Work in narrow red-green vertical slices. Keep the diff limited to the issue.
5. Run focused checks during implementation.
6. Run every verification command required by `AGENTS.md` before review. Run tests when the repository has a test suite; never report an absent test suite as passing.
7. Run `/code-review` with two independent reviewers: Standards and Spec.
8. Fix accepted findings, then rerun every affected check.

## Publish

1. Commit only verified work to the owned feature branch. Reference the issue in the commit or PR.
2. Push the feature branch.
3. Open a PR against `main` with:
   - the problem and solution;
   - the issue reference;
   - exact verification evidence;
   - security or deployment impact;
   - anything not verified.
4. End this workflow at the open, unmerged PR. Never merge it from this skill, even when the user later requests a merge; treat merging as a separate human-approved workflow.
5. Never push directly to `main`, rotate secrets, or delete branches unless the user explicitly asks.

## Report

State the issue, branch, commit, PR URL, checks run and their results, review outcome, remote writes performed, and remaining work. Distinguish verified facts from untested outcomes.
