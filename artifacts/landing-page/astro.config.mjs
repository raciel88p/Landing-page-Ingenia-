import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Usamos la integración oficial de React,
// y el plugin Vite de tailwindcss v4 para tener soporte directo.
export default defineConfig({
  output: 'static',
  outDir: 'dist/client',
  integrations: [
    react()
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
