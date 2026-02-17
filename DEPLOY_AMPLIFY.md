# Deploying ReelsRev to AWS Amplify Hosting

This guide shows how to host the static prototype in `reelsrevhome` using Amplify Console (recommended).

Prerequisites
- An AWS account and an IAM user with permissions to manage Amplify, S3, CloudFront.
- A GitHub repo for this project.

Git-based deploy (Amplify Console)
1. Push this project to a Git repository (see `TRY_IT.md` for `gh` steps).
2. Open the Amplify Console: https://console.aws.amazon.com/amplify/home
3. Click **Host web app** → **Connect repository** and choose your provider.
4. Select repo and branch. Amplify Console will read `amplify.yml`.
5. Confirm `baseDirectory` is set to the project root and deploy.

Required repository secrets for the provided workflow
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `AMPLIFY_APP_ID` (Amplify app identifier)
- `AMPLIFY_BRANCH` (branch name, e.g., `main`)

CLI deploy (optional)
```bash
npm install -g @aws-amplify/cli
amplify configure
cd reelsrevhome
amplify init
amplify add hosting
amplify publish
```

Notes
- Use Amplify Console for automated builds on push. For production, add caching headers and configure a custom domain.
