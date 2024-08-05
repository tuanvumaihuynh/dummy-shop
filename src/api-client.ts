import axios from 'axios'
import { refresh as refreshAccessToken } from '@/features/auth/api'

Object.assign(axios.defaults, {
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 10000
})

let isRefreshing = false

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const { response, config } = error
    const status = response?.status

    if (status === 401 || status === 403) {
      if (!isRefreshing) {
        isRefreshing = true

        const refreshToken = localStorage.getItem('refreshToken')
        if (!refreshToken) {
          const router = useRouter()
          router.replace('/login')
          return Promise.reject(error)
        }

        try {
          const data = await refreshAccessToken({ refreshToken })
          localStorage.setItem('accessToken', data.token)
          localStorage.setItem('refreshToken', data.refreshToken)
          config.headers.Authorization = `Bearer ${data.token}`
          return axios(config)
        } catch (error) {
          return Promise.reject(error)
        } finally {
          isRefreshing = false
        }
      }

      return Promise.reject(error)
    }
  }
)

export default axios
