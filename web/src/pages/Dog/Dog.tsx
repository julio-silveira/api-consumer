import { Box } from '@mui/material'
import React from 'react'

const Dog: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      Dogs
    </Box>
  )
}

export default Dog
