import { defineStore } from 'pinia'
import { useWebApp } from 'vue-tg'

export const useMyAuthStore = defineStore('myAuthStore', () => {
  const token = ref('')

  async function login() {
    const { initDataUnsafe } = useWebApp()
    console.log(initDataUnsafe)
    if (!initDataUnsafe) {
      return
    }

    const response = await fetch(`${useNuxtApp().$config.public.apiUrl}/auth`, {
      method: 'POST',
      body: JSON.stringify(initDataUnsafe.hash)
    })

    const [error, data] = await useTryCatch(response.json())

    if (error) {
      console.error(error)
      return
    }

    console.log(data)
    token.value = data
  }

  return {
    token,
    login
  }
})
