import axios from 'axios'

export const tokens = token => axios.get(`/api/v1/tokens/${token}`)
export const login = (payload) => axios.post('/api/v1/login', payload)
export const logout = () => axios.delete('/api/v1/logout')
export const register = (payload) => axios.post('/api/v1/register', payload)
export const sendVerificationEmail = (payload) => axios.post('/api/v1/send-verification-email', payload)
export const verifyAccount = (payload) => axios.post('/api/v1/verify-account', payload)
export const resetPassword = (payload) => axios.post('/api/v1/reset-password', payload)
