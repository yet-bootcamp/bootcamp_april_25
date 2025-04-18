import { useWebApp } from "vue-tg"
import { getUserID } from "@/scripts/getUserID"

interface ApiResponse<T = any> {
    data: T
    error: string | null
}


export default defineNuxtPlugin((nuxtApp) => {
    const { initDataUnsafe } = useWebApp()
    const config = useRuntimeConfig()

    const api = {
        async get<T>(endpoint: string, options: RequestInit = {}) {
            return useFetch<ApiResponse<T>>(`${config.public.apiUrl}${endpoint}?id=${getUserID()}`, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'omit',
                mode: 'no-cors',
                method: 'GET',
            })
        },  

        async post<T>(endpoint: string, options: RequestInit = {}) {

            return useFetch<ApiResponse<T>>(`${config.public.apiUrl}${endpoint}`, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'omit',
                mode: 'no-cors',
                method: 'POST',
                body: {
                    ...options.body,
                    user_id: getUserID()
                }
            })
        }
    }

    return {
        provide: {
            api
        }
    }
})
