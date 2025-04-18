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
  css: ['~/assets/css/main.css'],
  ssr: false,
  app: {
    head: {
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: 'https://74aa-5-104-75-74.ngrok-free.app/api'
    }
  },
  imports: {
    dirs: [
      'scripts/**'
    ]
  },
  vite: {
    server: {
      https: {
        key: './ssl/localhost.key',
        cert: './ssl/localhost.crt'
      },
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false
        }
      }
    }
  },
   pinia: {
    storesDirs: ['./stores/**'],
  },
})