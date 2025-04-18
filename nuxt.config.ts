// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/ui',
    'nuxt-icons',
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
      apiUrl: 'http://localhost:8080/api'
    }
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
  }
})