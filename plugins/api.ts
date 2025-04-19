import { useWebApp } from "vue-tg"
import { getUserID } from "@/scripts/getUserID"
import axios from "axios"

interface ApiResponse<T = any> {
    data: T
    error: string | null
}


 export default defineNuxtPlugin((nuxtApp) => {
     const { initDataUnsafe } = useWebApp()
     const config = useRuntimeConfig()

    const api = {
        async get<T>(endpoint: string, options: any = {}) {
            const response = await fetch(`${config.public.apiUrl}${endpoint}?id=${getUserID()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                ...options
            })
            return response
        },

        async post<T>(endpoint: string, body: any) {
            const response = await fetch(`${config.public.apiUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            return response
        },

        async patch<T>(endpoint: string, body: any) {
            const response = await fetch(`${config.public.apiUrl}${endpoint}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            return response
        }
    }

    return {
        provide: {
            api
        }
    }
     })
