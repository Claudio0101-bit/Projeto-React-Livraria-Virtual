import type { AxiosInstance } from "axios";

export function setupInterceptors(instance: AxiosInstance) {
    instance.interceptors.request.use((config) => {
        const token = "Quando eu tiver" // TODO

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config;
    })

    instance.interceptors.response.use((error) => {
        if (error.status === 401) {
            // TODO: Fazer Logout
        }

        return Promise.reject(error);
    })
}