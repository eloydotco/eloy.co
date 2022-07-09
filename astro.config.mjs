import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://eloy.co/',
  integrations: [tailwind(), sitemap()],
  vite: {
    ssr: {
      external: ['@11ty/eleventy-img', 'svgo'],
    },
  },
});
