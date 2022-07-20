import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eloy.co/',
  integrations: [sitemap()],
  vite: {
    ssr: {
      external: ['@11ty/eleventy-img', 'svgo'],
    },
  },
});
