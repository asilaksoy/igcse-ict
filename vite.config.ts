import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Two build targets:
//  - default (`npm run build`): multi-file PWA build for Vercel (service worker + offline cache)
//  - `npm run build:single`: one self-contained index.html (no service worker) for quick hosting/preview
export default defineConfig(({ mode }) => {
  const single = mode === 'single'
  return {
    plugins: [
      react(),
      tailwindcss(),
      single
        ? viteSingleFile()
        : VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'script',
            includeAssets: ['favicon.svg', 'apple-touch-icon.png', 'robots.txt'],
            manifest: {
              name: 'ICT Interactive – IGCSE ICT 0417',
              short_name: 'ICT Interactive',
              description:
                'Free bilingual (English/Türkçe) interactive learning site for Cambridge IGCSE ICT 0417. Developed by Asil Aksoy, ICT Teacher, with AI assistance.',
              theme_color: '#071122',
              background_color: '#071122',
              display: 'standalone',
              orientation: 'any',
              start_url: '/',
              scope: '/',
              lang: 'en',
              icons: [
                { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
                { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
                { src: 'pwa-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
              ],
            },
            workbox: {
              globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
              cleanupOutdatedCaches: true,
              clientsClaim: true,
              skipWaiting: true,
            },
          }),
    ],
    build: { outDir: single ? 'dist-single' : 'dist' },
  }
})
