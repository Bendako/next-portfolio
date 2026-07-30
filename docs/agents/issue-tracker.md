# Issue tracker: GitHub

Specs and implementation tickets live as GitHub Issues in `Bendako/next-portfolio`. Use the GitHub connector when available; otherwise use an authenticated `gh` CLI from this checkout.

## Conventions

- A spec issue describes the destination, user stories, implementation decisions, testing decisions, and out-of-scope work.
- Create one implementation issue per independently demonstrable vertical slice.
- Agent-ready issues carry the `ready-for-agent` label.
- Claim an issue by assigning it to the acting GitHub user before branching or editing.
- Keep one active implementing environment per issue.
- PRs deliver approved issues; they are not the incoming feature-request queue.

## Operations

- Ensure the label exists: `gh label create ready-for-agent --color 0E8A16 --description "Approved ticket ready for an isolated agent implementation" --force`
- Create: `gh issue create --title "..." --body-file <file>`
- Read fully: `gh issue view <number> --comments`
- List: `gh issue list --state open`
- Claim: `gh issue edit <number> --add-assignee @me`
- Label: `gh issue edit <number> --add-label ready-for-agent`
- Comment: `gh issue comment <number> --body-file <file>`

Infer the repository from the current checkout. Never include credentials or environment-secret values in issues, comments, commits, or PR descriptions.
