# Personal Portfolio

Small React + Tailwind site that hosts my hero section, CV, and a few stub pages. Text is served from a JSON file so I can flip between Portuguese and English without duplicating content.

## Contents
- Language toggle managed by `LanguageContext`.
- Curriculum page that renders skills/background/experience straight from `websiteData.json`.
- Router setup for Home, CV, Projects, About, Contact, plus a placeholder project-detail route.
- Tailwind styling, sticky navbar, and a JSON server (`npm run server`) that feeds copy during development.

## Stack
- React 19 + React Router 7
- Tailwind CSS 4
- Vite
- JSON Server

## Run It Locally
1. Install dependencies: `npm install`
2. Start the JSON server (needed for text data): `npm run server`
3. In another terminal, run the dev server: `npm run dev`
4. Open the printed URL (`http://localhost:3000`).

## Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview the build
- `npm run lint` – run ESLint
- `npm run server` – serve `src/websiteData.json` on port 8000

## Data Notes
All strings live in [src/websiteData.json](src/websiteData.json). Each language block includes:
- `title` / `subtitle` for the hero
- `cv` with `skills`, `background`, `experience` used by [Curriculum](src/pages/Curriculum.jsx)
- `about` copy for future About page sections

Outside the language blocks there’s a `contactInfo` object (email, LinkedIn, GitHub) that will back the Contact page when it’s implemented.

## Next Steps
1. Finish BrowseProjects and Contact pages.
2. Hook the site to a real back end (or CMS) and retire the mock API.
