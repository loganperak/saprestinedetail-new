# Static Business Site (Zero Build Version)

This is a plain static site (HTML/CSS/JS). No npm, no builds.
Use it to deploy instantly via Vercel (static), Netlify Drop, or GitHub Pages.

## Vercel (static, no build)
1) Create a new GitHub repo (empty). Upload these files to the repo **root**:
   - `index.html`
   - `styles.css`
   - `script.js`
2) In Vercel → New Project → Import that repo.
3) Settings on the import screen (or Project → Settings → Build & Output):
   - Framework Preset: **Other**
   - Build Command: **(leave blank)**
   - Output Directory: **.**
4) Deploy.

## Netlify Drop (drag & done)
Go to Netlify Drop and drag `index.html` (plus `styles.css` and `script.js`).
You’ll get a public URL immediately.

## GitHub Pages
- Create a repo, upload these files at the root.
- Settings → Pages → Source: `main`, folder: `/ (root)` → Save.
- Your site becomes available at `https://<username>.github.io/<repo>`.

## Customize
- Phone number: search `(708) 000‑0000`
- Form endpoint: replace `https://formspree.io/f/your-id`
- Headings / copy: edit in `index.html`
