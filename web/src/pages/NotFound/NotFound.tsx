import { Box, Container } from '@mui/material'
import React from 'react'
import { CustomMainBox } from '../../components/CustomMainBox'
import { Header } from '../../components/Header'

const NotFound: React.FC = () => {
  return (
    <CustomMainBox>
      <>
        <Header />
        <Container
          sx={{
            mt: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Box width="100%" mb={4}>
            <img width="100%" src={'https://http.cat/404.jpg'} alt="cat" />
          </Box>
        </Container>
      </>
    </CustomMainBox>
  )
}

export default NotFound
