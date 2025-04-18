import { defineStore } from 'pinia'

export const useMyAuthStore = defineStore({
  id: 'myAuthStore',
  state: () => ({
    token: null as string | null,
    isAuthenticated: false,
    user: null as any
  }),
  actions: {
    async login() {
      const { initDataUnsafe } = useWebApp()
      const { $api } = useNuxtApp()
      
      try {
        const telegramId = ((initDataUnsafe || {user: {id: ''}}).user || {id: ''}).id
        
        const { data } = await $api.post('/auth', {
          body:{
            
          }
        })

        if (data.value?.data?.token) {
          this.token = data.value.data.token
          this.isAuthenticated = true
          this.user = data.value.data.user
          
          // Store token in localStorage for persistence
          localStorage.setItem('auth_token', this.token)
        }

        return data.value
      } catch (error) {
        console.error('Login error:', error)
        return null
      }
    },

    logout() {
      this.token = null
      this.isAuthenticated = false
      this.user = null
      localStorage.removeItem('auth_token')
    },

    initAuth() {
      const token = localStorage.getItem('auth_token')
      if (token) {
        this.token = token
        this.isAuthenticated = true
      }
    }
  }
})
