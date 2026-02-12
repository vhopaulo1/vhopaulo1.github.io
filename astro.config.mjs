import tailwindcss from "@tailwindcss/vite";
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://vhopaulo1.github.io',
    base: '/',
  integrations: [mdx(), sitemap()],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
    routing: {
        prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()],
  },
});