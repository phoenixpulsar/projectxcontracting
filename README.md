# ProjectX Landing Page

Single page marketing site. Vite + React + Tailwind, served by a tiny Express static server.

## Local dev

    npm install
    npm run dev

## Deploy on Railway, 5 steps

1. Push this folder to a GitHub repository.
2. In Railway, create a new project and choose Deploy from GitHub repo, pick the repository.
3. In the service settings, add environment variables: VITE_GA_MEASUREMENT_ID, VITE_CLARITY_PROJECT_ID, VITE_CALENDLY_URL (see .env.example). All three are optional, the site runs with safe fallbacks.
4. Deploy. Railway reads railway.json: build runs "npm run build", start runs "npm start" and serves dist on process.env.PORT.
5. Point your domain: add a custom domain in Railway settings and create the CNAME record it shows you.
