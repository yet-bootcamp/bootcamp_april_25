import { useWebApp } from "vue-tg"

export default defineNuxtPlugin((nuxtApp) => {
    const { initDataUnsafe } = useWebApp()
    const config = useRuntimeConfig()

    const api = {
        async get<T>(endpoint: string, options: RequestInit = {}) {
            return fetch(`${config.public.apiUrl}${endpoint}?id=${((initDataUnsafe || {user: {id: ''}}).user || {id: ''}).id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                ...options,
                method: 'GET',
            })
        },  

        async post<T>(endpoint: string, data: any, options: RequestInit = {}) {
            return fetch(`${config.public.apiUrl}${endpoint}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
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
