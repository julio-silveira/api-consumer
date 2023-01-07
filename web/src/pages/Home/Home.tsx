import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../../Components/Header'

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Header />
      Home
    </Box>
  )
}

export default Home
