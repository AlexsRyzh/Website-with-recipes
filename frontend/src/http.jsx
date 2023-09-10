import axios from "axios";

const API_URL = 'http://127.0.0.1:8000'

const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((response) => {
    return response
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get('/refresh', { baseURL: API_URL, withCredentials: true })
            localStorage.setItem('token', response.data.access_token)
            return $api.request(originalRequest)
        } catch (e) {
            console.log('Не авторизован');
        }
    }
    throw error
})

export default $api
