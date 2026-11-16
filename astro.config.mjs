// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Root user/org GitHub Pages site, so there is no `base` path —
  // the site is served from the domain root, not a /repo-name/ subfolder.
  site: 'https://murrayquinnwedding.github.io',
});
