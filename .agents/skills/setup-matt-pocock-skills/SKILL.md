---
name: setup-matt-pocock-skills
description: Configure this GitHub repository for the installed engineering skills by wiring its issue tracker, approval label, and domain documentation.
disable-model-invocation: true
---

# Set up the engineering skills

Use this once when the repository-owned workflow is first installed, or when its GitHub issue-tracker configuration needs to be repaired.

This repository uses GitHub Issues. Do not offer GitLab, local markdown, or another tracker unless the user explicitly changes the repository policy first.

## Process

### 1. Inspect

Read:

- `git remote -v` and the current branch;
- `AGENTS.md`;
- `docs/agents/issue-tracker.md`;
- `docs/agents/domain.md`;
- `docs/agents/collaboration.md`;
- any existing `CONTEXT.md` and `docs/adr/`.

Confirm the remote resolves to the GitHub repository named in `docs/agents/issue-tracker.md`. Preserve any existing project-specific instructions.

### 2. Draft

Show the user any proposed changes before writing. The configured repository must have:

- an `## Agent workflow` or `## Agent skills` section in `AGENTS.md`;
- `docs/agents/issue-tracker.md` describing GitHub Issues;
- `docs/agents/domain.md` describing the repository's domain-document layout;
- `docs/agents/collaboration.md` describing branch ownership and Mac/VPS handoffs;
- a `ready-for-agent` label whose meaning is “approved implementation ticket.”

Do not create duplicate instruction sections or overwrite unrelated user edits.

### 3. Configure GitHub

Use the connected GitHub integration when available; otherwise use authenticated `gh`.

Ensure the label exists:

```sh
gh label create ready-for-agent \
  --color 0E8A16 \
  --description "Approved ticket ready for an isolated agent implementation" \
  --force
```

Do not apply the label to a parent spec. Apply it only after the user approves an independently implementable ticket's scope and acceptance criteria.

### 4. Verify

Confirm:

- the repository instructions point to all three files under `docs/agents/`;
- the GitHub repository name is correct;
- the approval label exists;
- `.cursor/skills` resolves to `.agents/skills`;
- `ship-feature/SKILL.md` frontmatter parses and contains the required `name` and `description`; if the current harness provides a skill validator, run it and report the exact command;
- no secrets, memory, sessions, or machine-local configuration entered the diff.

Report what was verified and what still requires a separate environment, such as Hermes skill discovery on the VPS.
