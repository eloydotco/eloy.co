import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eloy.co/',
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ['@11ty/eleventy-img', 'svgo'],
    },
  },
});
