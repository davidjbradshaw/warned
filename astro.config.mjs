// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidbradshaw.github.io',
  base: '/warned',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
