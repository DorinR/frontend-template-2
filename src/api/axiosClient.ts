import axios from 'axios'

export const AxiosClient = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { 'Access-Control-Allow-Origin': '*' },
})

AxiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        if (config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
    } else {
        if (config.headers) {
            delete config.headers['Authorization']
        }
    }
    return config
})
