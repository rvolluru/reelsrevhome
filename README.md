# ReelsRev — Static Prototype

This folder contains a static front-end prototype for ReelsRev — a platform that lets influencers upload reels to earn incremental revenue and lets publishers embed those reels to monetize traffic via video ads.

## Files

- `index.html` — homepage and demo embed/uploader UI
- `styles.css` — styles for the site
- `scripts.js` — small demo interactions (copy embed, preview, mock upload)
- `assets/` — images and static assets
- `amplify.yml`, `.github/workflows/amplify-deploy.yml` — CI/CD helpers

## Run locally

Open the site in a browser or serve it with a simple static server:

```bash
# from this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy
See `DEPLOY_AMPLIFY.md` for Amplify-specific steps and required repository secrets.
