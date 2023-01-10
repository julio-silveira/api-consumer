import { AlertColor } from '@mui/material'

export const getAlertType = (statusCode: number): AlertColor => {
  const isSuccessful = statusCode >= 200 && statusCode < 300
  return isSuccessful ? 'success' : 'error'
}
