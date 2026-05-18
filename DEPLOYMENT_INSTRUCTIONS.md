# Deployment Instructions

## GitHub

GitHub CLI authentication succeeded for this agent. If the automated push did not complete, run:

```bash
gh repo create site-chen-jiangkai-dds --public --source=. --remote=origin --push
```

If the name is unavailable:

```bash
gh repo create site-chen-jiangkai-dds-1 --public --source=. --remote=origin --push
```

## Vercel

The `vercel` CLI was not found on `PATH` during the automated auth check. Install or expose an already-authenticated Vercel CLI, then run:

```bash
npm install
npm run build
vercel --prod
```

Do not use `npx vercel` in this automated workspace unless you are ready to handle install/login prompts interactively.
