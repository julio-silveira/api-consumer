import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../Components/Header'

const Costumer: React.FC = () => {
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
      Costumer
    </Box>
  )
}

export default Costumer
