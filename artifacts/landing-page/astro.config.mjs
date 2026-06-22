import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Usamos la integración oficial de React,
// y el plugin Vite de tailwindcss v4 para tener soporte directo.
export default defineConfig({
  site: 'https://ingenia.cr',
  output: 'static',
  outDir: 'dist/client',
  integrations: [
    react(),
    sitemap()
  ],
  vite: {
    plugins: [
      tailwindcss()
    ],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          changeOrigin: true,
        },
      },
    },
  }
});
