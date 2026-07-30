---
name: handoff
description: Compact the current conversation into a handoff document for another agent to pick up.
argument-hint: "What will the next session be used for?"
disable-model-invocation: true
---

Write a handoff that lets a fresh agent continue without copying agent state between environments.

- **Same environment, fresh session:** save a temporary handoff document in the OS temporary directory, not the workspace.
- **Mac/VPS or other cross-environment handoff:** do not copy the temporary document. Put the durable, non-sensitive state in the GitHub issue or PR and hand off through the issue, branch, commit, and PR URLs.

Include a "suggested skills" section in the document, which suggests skills that the agent should invoke.

Do not duplicate content already captured in other artifacts (specs, plans, ADRs, issues, commits, diffs). Reference them by path or URL instead. Never use chat history, temporary files, memory, sessions, or uncommitted work as a Mac/VPS handoff surface.

Redact any sensitive information, such as API keys, passwords, or personally identifiable information.

If the user passed arguments, treat them as a description of what the next session will focus on and tailor the doc accordingly.
