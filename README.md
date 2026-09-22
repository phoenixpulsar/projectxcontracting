# ProjectX Landing Page

Single page marketing site. `index.html` is a self-contained page export
(all markup, styles and scripts inline), served by a tiny Express static server.

## Local dev

    npm install
    npm run dev      # builds dist/ and serves it on http://localhost:3000

`npm run build` copies `index.html` and everything in `public/` (favicons)
into `dist/`. There is no bundler step.

## Updating the page

Replace `index.html` with the new export. One thing to check before pushing:
the export may place a `<noscript>` block containing a `<div>` inside `<head>`;
that is invalid HTML and some tooling rejects it, so move that block into `<body>`.

Calendly URL, Google Analytics and Microsoft Clarity IDs are set inside
`index.html` (the export's Integrations props), not via environment variables.

## Deploy on Railway

1. Push this repository to GitHub.
2. In Railway, create a new project, choose Deploy from GitHub repo, pick the repository.
3. Deploy. Railway reads railway.json: build runs "npm run build", start runs "npm start" and serves dist on process.env.PORT.
4. Point your domain: add a custom domain in Railway settings and create the CNAME record it shows you.
