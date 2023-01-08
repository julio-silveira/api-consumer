import { IconButton } from '@mui/material'
import React from 'react'

interface PropsInterface {
  children: React.ReactElement
  onClick: (event: React.MouseEvent<HTMLElement>) => void
}

const CustomIconButton: React.FC<PropsInterface> = ({ children, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        '&>*': {
          color: 'white'
        },
        '&:hover': {
          bgcolor: 'white',
          color: 'white',
          '&>*': {
            color: '#1BA2A1'
          }
        }
      }}
    >
      {children}
    </IconButton>
  )
}

export default CustomIconButton
