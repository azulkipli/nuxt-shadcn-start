// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite:{
    plugins: [
      tailwindcss(),
    ],
    $client: {
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: '_nuxt/[hash].js',
            assetFileNames: '_nuxt/[hash][extname]',
            entryFileNames: '_nuxt/[hash].js'
          }
        }
      }
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})