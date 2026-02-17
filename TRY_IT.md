# Try it locally

Serve the site locally from the `reelsrevhome` folder:

```bash
cd ~/reelsrevhome
python3 -m http.server 8000
# Open http://localhost:8000
```

Create a GitHub repo with the GitHub CLI (recommended):

```bash
cd ~/reelsrevhome
gh repo create youruser/reelsrevhome --private --source=. --remote=origin --push
```

If you don't have `gh`, use `git` + GitHub web UI or the earlier `curl` method in `DEPLOY_AMPLIFY.md`.
