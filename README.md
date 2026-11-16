# Aoife & Mark — 17th April 2028

A one-page save-the-date site, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Running it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually <http://localhost:4321>).

| Command           | What it does                                |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start the local dev server with live reload |
| `npm run build`   | Build the production site into `dist/`      |
| `npm run preview` | Preview the built site locally              |

## How it is put together

```
src/
  config.ts              Wedding date, contact details, booking link
  styles/global.css      Design tokens (colour, type, spacing) + shared styles
  layouts/Base.astro     The <head>, font preloads, meta tags
  components/            One component per section of the page
  pages/index.astro      Assembles the sections in order
public/
  images/                Compressed WebP artwork
  fonts/                 Self-hosted woff2 fonts
```

Everything visual is driven by the custom properties at the top of
`src/styles/global.css`. Changing a colour or a type size there changes it
everywhere, so there is no need to hunt through the components.

### The countdown

`src/components/Countdown.astro` renders the day/hour/minute/second values
**at build time**, then a small client-side script updates them every second.
That way the numbers are never blank or `NaN` before the JavaScript runs, and
the section still shows sensible (if slightly stale) values if a visitor has
JavaScript turned off.

## Two things still to confirm

### 1. The heading font

The Figma file uses **Aborteo**, which is a commercial font with no confirmed
webfont licence, so it is **not** shipped here. The headings currently use
**Italiana** (a free Google font) as a stand-in.

The whole heading stack is one variable, so swapping it is a one-line change
in `src/styles/global.css`:

```css
--font-heading: 'Italiana', 'Cormorant Garamond', Georgia, serif;
```

`Marcellus` is also already downloaded in `public/fonts/` as an alternative.

### 2. Contact details

The Email and WhatsApp buttons in the footer point at **placeholders** in
`src/config.ts`. They need the real address and number before the site goes
live.

Note that this repository has to be **public** for GitHub Pages to work on a
free plan, so anything committed here is readable by anyone.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages.

For this to work, the repository needs **Settings → Pages → Source** set to
**GitHub Actions** (not "Deploy from a branch").

The site is configured for <https://murrayquinnwedding.github.io> — a root
user/org site, so there is no `base` path set in `astro.config.mjs`.

## Image assets

The original full-size exports live in `_source-images/`, which is
**not** committed (see `.gitignore`). The versions actually used by the site
are the compressed WebP files in `public/images/`.
