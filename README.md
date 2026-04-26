# LedgerCart Website

Official website for **LedgerCart** — an IT services company delivering custom software, cybersecurity, and enterprise ERP solutions.

## Tech Stack

- **React 19** + **Vite 5** — frontend framework and build tooling
- **Tailwind CSS 3** — utility-first styling
- **Supabase** — backend (blogs, careers, admin auth)
- **Netlify** — hosting with CDN and edge cache headers

## Local Development

```bash
npm install
npm run dev        # starts dev server at http://localhost:5173
```

## Build & Deploy

```bash
npm run build      # production build → dist/
                   # auto-generates sitemap.xml + robots.txt via postbuild
```

Deploys automatically on push to `main` via Netlify CI.

## Project Structure

```
public/            # Static assets (favicons, og-image, headers)
src/
  assets/          # App images (WebP, processed by Vite)
  components/      # Shared layout components (Navbar, Footer, etc.)
  context/         # React context (ThemeContext, AuthContext)
  lib/             # Utilities (seo.js, supabase.js)
  pages/           # Route-level page components
scripts/           # Build-time scripts (SEO file generation)
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
SITE_URL=https://ledgercart.in
```

## License

© 2026 LedgerCart IT Solutions. All rights reserved.  
LedgerCart® is a registered trademark.
