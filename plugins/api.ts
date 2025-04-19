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
            return axios.get<T>(`${config.public.apiUrl}${endpoint}?id=${getUserID()}`)
        },

        async post<T>(endpoint: string, body: any) {
            return axios.post<T>(`${config.public.apiUrl}${endpoint}`, body)
        },

        async patch<T>(endpoint: string, body: any) {
            return axios.patch<T>(`${config.public.apiUrl}${endpoint}`, body)
        }
    }

    return {
        provide: {
            api
        }
    }
     })
