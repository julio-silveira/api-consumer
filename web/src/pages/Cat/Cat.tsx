import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { CustomMainBox } from '../../Components/CustomMainBox'
import { Header } from '../../Components/Header'

const Cat: React.FC = () => {
  return (
    <CustomMainBox>
      <>
        <Header />
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box width={{ xs: '95%', md: '60%' }}>
            <img width="100%" src="https://http.cat/250" alt="cat" />
          </Box>
        </Container>
      </>
    </CustomMainBox>
  )
}

export default Cat
