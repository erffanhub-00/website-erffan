// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://website-erffan.erffanhub.workers.dev',
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // No inline colors: token colors come from --shiki-* variables,
      // switched by the theme toggle in global.css.
      defaultColor: false,
      wrap: true,
    },
  },
});
