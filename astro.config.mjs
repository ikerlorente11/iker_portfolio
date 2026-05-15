// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts: true,
      watch: {
        usePolling: true,
        interval: 1000,
      },
    },
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger'],
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "eu"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
