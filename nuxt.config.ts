// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/ui',
    'nuxt-icons',
    '@pinia/nuxt',
    '@nuxt/eslint',
  ],
  colorMode: {
    preference: 'dark'
  },
  ui: {
    icons: ['heroicons'],
    primary: 'green',
    gray: 'cool',
    colors: ['primary']
  },
  css: ['~/assets/css/main.css'],
  plugins: ['~/plugins/api.ts'],
  ssr: false,
  app: {
    head: {
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: 'https://f9ec-5-104-75-74.ngrok-free.app/api'
    }
  },
  imports: {
    dirs: [
      'scripts/**'
    ]
  
  },
  vite: {
    server: {
      allowedHosts: ['*', 'aa2a-83-147-192-231.ngrok-free.app'],
      hmr: {
        host: '0.0.0.0'
      }
    }
  },
   pinia: {
    storesDirs: ['./stores/**'],
  },
})