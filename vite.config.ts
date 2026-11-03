import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // 1. Configuration serveur 100% optimisée pour ngrok & tunnels distants
  server: {
    host: '0.0.0.0', // Écoute sur toutes les interfaces (0.0.0.0) pour permettre le routage ngrok
    port: 5173,
    strictPort: true, // Verrouille le port 5173 sans basculement automatique
    allowedHosts: true, // Autorise tous les domaines ngrok (*.ngrok-free.app, *.ngrok.io, etc.)
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },

  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true,
    allowedHosts: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
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
