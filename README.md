# Sandy Buns Bakery & Cafe — Website

Production website for Sandy Buns Bakery & Cafe in West End, Roatán, Honduras.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** Netlify
- **Fonts:** Playfair Display + DM Sans (Google Fonts)

## Pages

- `/` — Home (hero, social proof, featured, vibe, quick info, CTA)
- `/menu` — Full menu with all items and prices
- `/about` — Story and values
- `/gallery` — Photo gallery (masonry grid)
- `/visit` — Location, hours, map, contact

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Generates static pages and sitemap.

## Deployment

Deploys automatically to Netlify on push. See `netlify.toml` for config.

## Image Placeholders

All food/restaurant images use warm gradient placeholders. Replace with real photos by:

1. Adding images to `public/images/`
2. Replacing `<ImagePlaceholder>` components with `<Image>` from `next/image`
3. Look for `/* TODO: Replace with real photos from Shantel & Tim */` comments
