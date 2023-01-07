import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../Components/Header'

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
      <Header />
      Dogs
    </Box>
  )
}

export default Dog
