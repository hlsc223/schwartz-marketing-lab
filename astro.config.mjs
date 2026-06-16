import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://schwartzmarketinglab.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/contact/success'),
    }),
  ],
});
