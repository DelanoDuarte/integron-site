// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? 'https://integron.com.br',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});