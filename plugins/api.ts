// import { useWebApp } from "vue-tg"
// import { getUserID } from "@/scripts/getUserID"

// interface ApiResponse<T = any> {
//     data: T
//     error: string | null
// }


// export default defineNuxtPlugin((nuxtApp) => {
//     const { initDataUnsafe } = useWebApp()
//     const config = useRuntimeConfig()

//     const api = {
//         async get<T>(endpoint: string, options: RequestInit = {}) {
//             return fetch(`${config.public.apiUrl}${endpoint}?id=${getUserID()}`, {
//                 ...options,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 method: 'GET',
//             })
//         },  

//         async post<T>(endpoint: string, body: any) {

//             return fetch(`${config.public.apiUrl}${endpoint}`, {
//                 body: JSON.stringify(body),
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 method: 'POST',
//             })
//         }
//     }

//     return {
//         provide: {
//             api
//         }
//     }
// })
