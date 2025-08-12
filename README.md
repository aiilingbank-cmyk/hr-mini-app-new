# HR Mini App — Clean Starter

This is a clean Vite + React starter configured for **GitHub Pages** using **GitHub Actions**.
- Uses **relative base** (`base: './'`) → works on any repo name/subpath.
- Workflow builds the app and deploys via `deploy-pages` (no gh-pages branch needed).

## Deploy (fresh repo)
1) Create a new repo (e.g., `hr-mini-app-new`), upload these files to `main`.
2) Settings → Pages → **Source: GitHub Actions**.
3) Actions → Run workflow **Deploy Vite app to GitHub Pages**.
4) Visit: `https://<username>.github.io/<repo-name>/`.

Replace `src/app.jsx` with your full app code when ready.
