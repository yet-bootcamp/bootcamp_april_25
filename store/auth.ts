import { defineStore } from 'pinia'
import nuxtConfig from '~/nuxt.config';

export const useMyAuthStore = defineStore('myAuthStore', () => {
  const token = ref('')

  async function login() {
    const { initDataUnsafe } = useWebApp()
    if (!initDataUnsafe) {
      return
    }

    const response = await fetch(`${useNuxtApp().$config.public.apiUrl}/auth`, {
      method: 'POST',
      body: JSON.stringify(initDataUnsafe.hash)
    })
    const data = await response.json()
    console.log(data)
    token.value = data
  }

  return {
    token,
    login
  }
})
