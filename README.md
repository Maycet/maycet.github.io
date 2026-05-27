# maycet.github.io — v3

Personal portfolio website for Francisco Mayorga Cetina — Mathematician & Software Developer.

Live at **[maycet.github.io](https://maycet.github.io)**.

## Version history

| Version | Stack | Branch |
|---------|-------|--------|
| v1 | Static HTML + CSS + JS | (archived) |
| v2 | Static HTML + Bootstrap + JS | `Public` |
| v3 *(current)* | React 19 + TypeScript + Vite + Tailwind CSS v4 | `react-migration` |

## Tech stack

- **React 19** with React Router v6 (SPA, client-side routing)
- **TypeScript**
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — configured via `@theme` directives in CSS, no `tailwind.config.ts`
- **i18next** — bilingual UI (English / Spanish), all strings in `src/i18n/`
- **Framer Motion** — page and scroll animations
- **@iconify/react** — icon library (`mdi:` prefix)

## Development

```bash
npm install
npm run dev       # Vite dev server with hot reload
npm run build     # Type-check + production build → dist/
npm run preview   # Serve the dist/ build locally
npx tsc -b --noEmit  # Type-check only
```

## Deploy

Automatic via GitHub Actions on every push to `react-migration`:

1. `npm ci` → `npm run build`
2. Copies `dist/index.html` → `dist/404.html` for SPA routing on GitHub Pages
3. Deploys `dist/` via `actions/deploy-pages`
