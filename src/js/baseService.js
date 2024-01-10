import axios from 'axios'
import { getToken } from '@/js/cookie'

/** @type {{[key: number]: string;}} */
const errorCode = {
  400: '請求錯誤，請檢查您的輸入',
  401: '未登入',
  403: '沒有權限',
  404: '請求錯誤，未找到該資源',
  500: '伺服器端出錯'
}

/**
 * Axios instance for making API requests.
 * @type {import('axios').AxiosInstance}
 */
const baseAPI = axios.create({
  // baseURL: window.location.hostname.includes('localhost') ? '/' : url,
  baseURL: '/api',
  // 請求超時設定
  timeout: 10000,
  // 跨域請求是否攜帶 cookie
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

baseAPI.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

baseAPI.interceptors.response.use(
  (res) => {
    if (res.headers['content-type'] === 'application/json') {
      return Promise.resolve(res.data)
    }
    if (res.data) {
      return Promise.resolve(res)
    }
    return Promise.reject(res)
  },
  (error) => {
    const { response } = error
    if (response) {
      if (response.data.message) {
        alert(response.data.message)
      } else {
        alert(errorCode?.[response.status] || '未知錯誤')
      }
    }
    return Promise.reject(error)
  }
)

/**
 * @typedef {import('axios').AxiosRequestConfig} AxiosRequestConfig
 */

/**
 * @param {string} url
 * @param {Object} [params]
 * @param {AxiosRequestConfig} [config]
 * @returns {Promise<any>}
 */
const baseGet = (url, params, config) => {
  return baseAPI.get(url, { ...config, params })
}

/**
 * @param {string} url
 * @param {Object} data
 * @param {AxiosRequestConfig} [config]
 * @returns {Promise<any>}
 */
const basePost = (url, data, config) => {
  return baseAPI.post(url, data, config)
}

export { baseGet, basePost }
