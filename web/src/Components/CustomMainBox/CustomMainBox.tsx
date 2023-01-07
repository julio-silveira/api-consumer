import { Box } from '@mui/material'
import React from 'react'

interface PropsInterface {
  children: React.ReactElement
  sx: object
}

const CustomMainBox: React.FC<PropsInterface> = ({ children, sx }) => {
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

export default CustomMainBox
