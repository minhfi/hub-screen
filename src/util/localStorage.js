import axios from 'axios'

// const Storage = window.sessionStorage
const localStorage = window.localStorage
const sessionStorage = window.sessionStorage
const storageKey = 'token'

/**
 * Get token
 * @return {String}
 */
function getToken () {
  try {
    const cache = JSON.parse(
      localStorage.getItem(storageKey) || sessionStorage.getItem(storageKey)
    )

    if (cache && typeof cache === 'object') {
      return cache.token
    }
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error(error)
  }

  return undefined
}

/**
 * Set token
 * @param {String} token
 * @return {Void}
 */
function setToken (token, keepLogin) {
  if (keepLogin) {
    return localStorage.setItem(storageKey, JSON.stringify({
      token
    }))
  }

  return sessionStorage.setItem(storageKey, JSON.stringify({
    token
  }))
}

/**
 * Empty sessionStorage
 * @return {Void}
 */
function clearToken () {
  return localStorage.removeItem(storageKey) || sessionStorage.removeItem(storageKey)
}

/**
 * axios config
 */
axios.defaults.baseURL = process.env.REACT_APP_PROXY

/**
 * Before request interceptor
 */
axios.interceptors.request.use(config => {
  const token = getToken()

  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
})

/**
 * Before response interceptor
 */
axios.interceptors.response.use(response => {
  return response
}, error => {
  // handler 401/clear session
  if (error.response && error.response.status === 401) {
    clearToken()
  }

  throw error
})

export {
  getToken,
  setToken,
  clearToken
}
