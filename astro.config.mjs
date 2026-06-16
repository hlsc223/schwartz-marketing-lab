import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Tailwind is wired in via plain PostCSS (see postcss.config.cjs), not the
// @astrojs/tailwind integration — that package's latest release only
// supports Astro 3/4/5 as a peer dependency, and this project is on Astro 6.
// Astro's build already runs all CSS through PostCSS/Vite regardless of
// integrations, so a postcss.config.cjs with tailwindcss + autoprefixer
// produces the same literal-utility-class support without a version
// conflict. Preflight is left off (see tailwind.config.mjs) for the same
// reason as before: every other already-shipped page (service pages, About,
// Packages, Contact, blog) depends on this project's own global.css reset.
export default defineConfig({
  site: 'https://schwartzmarketinglab.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/success'),
    }),
  ],
});
