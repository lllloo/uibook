import Cookies from 'universal-cookie'

/**
 * 具有預設選項的 Cookies 實例。
 * @type {Cookies}
 */
export const cookies = new Cookies(null, {
  path: '/',
  maxAge: 60 * 60 * 24 * 3
})

/**
 * 從 cookies 取得 token。
 * @returns {string} token 值。
 */
export const getToken = () => {
  return cookies.get('token')
}

/**
 * 設置 token 到 cookie 中
 * @param {string} token - 要設置的 token
 */
export const setToken = (token) => {
  cookies.set('token', token)
}

/**
 * 從 cookie 中移除 token。
 */
export const removeToken = () => {
  cookies.remove('token')
}
