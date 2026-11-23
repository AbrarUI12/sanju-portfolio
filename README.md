# Sanjoy Rozario — Portfolio

An editorial, minimal portfolio for **Sanjoy Rozario**: full-stack developer and applied AI enthusiast.

**Live URL after GitHub Pages activation:** https://abrarui12.github.io/sanju-portfolio/

## Features

- Responsive React + TypeScript site with Vite and Tailwind CSS
- Off-white/charcoal light and dark modes, with teal accents
- Cutout portrait asset at `public/sanjoy-cutout.webp`
- Five linked projects, interactive category filters, conceptual project illustrations
- About, skills, research, education, and contact sections
- Accessible mobile navigation, reduced-motion support, email-copy interaction
- Printable résumé at `/resume.html`
- Automatic GitHub Actions build and deployment from `main`

## Enable GitHub Pages (required once)

The workflow compiles successfully, but a **new repository's Pages setting must first be enabled by a repository administrator**. The GitHub Actions token cannot create the initial Pages site (GitHub returns "Resource not accessible by integration").

1. Open [Repository Settings → Pages](https://github.com/AbrarUI12/sanju-portfolio/settings/pages).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open [Actions → Deploy portfolio to GitHub Pages](https://github.com/AbrarUI12/sanju-portfolio/actions/workflows/deploy.yml), then **Run workflow** on `main` (or make a new push).
4. The deployed site should appear at **https://abrarui12.github.io/sanju-portfolio/** once the workflow succeeds.

## Development

```bash
npm install
npm run dev
npm run build
```

The Vite base path is set to `/sanju-portfolio/` for GitHub Pages project hosting.

## Content provenance

Text, research status, education, and project links were adapted from Sanjoy's supplied CV. Project artwork is **illustrative UI concept art**, not screenshots of the live projects. To adjust titles, links, or project order, edit `src/App.tsx`.

The résumé page contains the same professional material in printable HTML form, with a **Print / Save PDF** control. Sanjoy's phone number is intentionally omitted from the public site.
