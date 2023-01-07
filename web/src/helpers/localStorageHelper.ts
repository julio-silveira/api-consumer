const TOKEN_KEY = 'JWTTOKEN'
const REMEMBER_KEY = 'REMEMBERME'

export const getRemember = () => {
  const savedValue = localStorage.getItem(REMEMBER_KEY) || '0'
  return savedValue === '1'
}

export const saveRemember = (remember: boolean) =>
  localStorage.setItem(REMEMBER_KEY, remember ? '1' : '0')

export const getToken = () => localStorage.getItem(TOKEN_KEY) || ''

export const saveToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY, token)

export const clearLocalStorage = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REMEMBER_KEY)
}
