# pedrovrc.github.io

Personal portfolio site built with React and Tailwind CSS. Supports Portuguese and English, displays pinned GitHub projects, and includes a working contact form.

**Live at:** https://pedrovrc.github.io

## Features
- **Bilingual** - Portuguese/English toggle via `LanguageContext`, all copy lives in `websiteData.json`
- **CV page** - skills, background, and experience rendered from JSON data
- **Projects page** - fetches pinned repositories from the GitHub GraphQL API
- **Contact form** - wired to [Formspree](https://formspree.io) with toast notifications
- **Deployed automatically** via GitHub Actions on every push to `main`

## Stack
- React 19 + React Router 7
- Tailwind CSS 4
- Vite
- Formspree (contact form)
- GitHub Actions (CI/CD)

## Project Structure
```
src/
+-- components/
    +-- features/   # Stateful, domain-specific components
    +-- ui/         # Generic, presentational components
+-- context/        # LanguageContext
+-- layouts/        # Navbar, MainLayout
+-- pages/          # Route-level page components
+-- services/       # GitHub API calls
```