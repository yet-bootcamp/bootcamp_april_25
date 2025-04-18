import { useWebApp } from "vue-tg"

interface ApiResponse<T = any> {
    data: T
    error: string | null
}

export default defineNuxtPlugin((nuxtApp) => {
    const { initDataUnsafe } = useWebApp()
    const config = useRuntimeConfig()

    const api = {
        async get<T>(endpoint: string, options: RequestInit = {}) {
            return useFetch<ApiResponse<T>>(`${config.public.apiUrl}/api${endpoint}?id=${((initDataUnsafe || {user: {id: ''}}).user || {id: ''}).id}`, {
                ...options,
                method: 'GET',
            })
        },  

        async post<T>(endpoint: string, data: any, options: RequestInit = {}) {
            return useFetch<ApiResponse<T>>(`${config.public.apiUrl}/api${endpoint}?id=${((initDataUnsafe || {user: {id: ''}}).user || {id: ''}).id}`, {
                ...options,
                body:{
                    ...options.body,
                    id: ((initDataUnsafe || {user: {id: ''}}).user || {id: ''}).id
                },
                method: 'POST',
            })
        }
    }

    return {
        provide: {
            api
        }
    }
})
