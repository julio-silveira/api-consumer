import { AlertColor } from '@mui/material'

export interface AlertInterface {
  message: string
  type: AlertColor
  open: boolean
}
