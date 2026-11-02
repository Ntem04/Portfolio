import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // 1. Configuration serveur optimisée pour les tunnels ngrok & accès distant
  server: {
    host: true, // Écoute sur 0.0.0.0 pour permettre le routage ngrok
    port: 5173,
    strictPort: true,
    allowedHosts: true, // Autorise tous les domaines ngrok (ex: *.ngrok-free.app, *.ngrok.io)
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    allowedHosts: true,
    cors: true,
  },

  // 2. Évite tout conflit avec un PostCSS hérité d'un dossier parent
  css: {
    postcss: {
      plugins: [],
    },
  },

  // 3. Optimisations et compression du bundle pour un score Lighthouse maximal
  build: {
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 800,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        // Découpage intelligent du code (Code Splitting) pour réduire le TBT et accélérer le FCP
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons'
          }
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
