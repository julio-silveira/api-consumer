import { Box } from '@mui/material'
import React from 'react'

interface PropsInterface {
  children: React.ReactElement
}

const CustomMainBox: React.FC<PropsInterface> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage:
          'url("https://finestwp.co/demos/wp/shadepro/wp-content/uploads/2020/10/pattern-2.png")'
      }}
    >
      {children}
    </Box>
  )
}

export default CustomMainBox
