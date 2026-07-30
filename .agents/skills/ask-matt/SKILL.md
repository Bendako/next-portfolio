---
name: ask-matt
description: Ask which installed project skill or flow fits the current situation.
disable-model-invocation: true
---

# Ask Matt

Route work through the curated skills installed in this repository.

## Main flow

1. Run `/grill-with-docs` to sharpen an idea and record domain terms or durable decisions.
2. If a question needs a runnable answer, bridge to a fresh session with `/handoff`, run `/prototype`, then bring the conclusion back.
3. If the implementation fits one fresh context, run `/implement`.
4. If it needs multiple contexts, run `/to-spec`, then `/to-tickets`, and start a fresh `/ship-feature` session for each ticket.

`/implement` drives `/tdd`, runs the project checks, and closes with `/code-review`. `/ship-feature` adds the cross-environment branch and PR lifecycle.

## On-ramps

- A hard bug or regression → `/diagnosing-bugs`, then `/ship-feature` once the cause and regression seam are known.
- A design uncertainty → `/prototype`.
- A nearly-full context → `/handoff`; continue in a fresh session.

## Context hygiene

Keep grilling, spec, and ticket drafting in one context when practical. Start every implementation ticket in a fresh context. Do not continue once attention or context quality is visibly degrading.

## Precondition

Run `/setup-matt-pocock-skills` once per repository before the first engineering flow.
