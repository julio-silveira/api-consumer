import { Box, Container, Fab } from '@mui/material'
import { AxiosResponse } from 'axios'
import React, { useContext, useState } from 'react'
import { CustomMainBox } from '../../components/CustomMainBox'
import { Header } from '../../components/Header'
import useAxios from '../../hooks/useAxios'
import RefreshIcon from '@mui/icons-material/Refresh'
import AppContext, { ContextType } from '../../context/AppContext'

const baseUrl = 'https://random.dog/'
const defaultDog = `https://random.dog/c4587e93-93f3-4df5-9c67-501ad03294b7.jpg`

const axiosDogRequest = {
  url: `${baseUrl}woof`,
  method: 'GET'
}

const Dog: React.FC = () => {
  const { handleOpenAlert } = useContext(AppContext) as ContextType

  const { loading, newAxiosRequest } = useAxios({})
  const [dogUrl, setDogUrl] = useState(defaultDog)

  const refreshDog = async () => {
    try {
      const fetchDog = async () => {
        const { data } = (await newAxiosRequest(
          axiosDogRequest
        )) as AxiosResponse
        !data ||
        data.includes('.mp4') ||
        data.includes('.webm') ||
        data.includes('.gif')
          ? fetchDog()
          : setDogUrl(`${baseUrl}${data}`)
      }
      fetchDog()
    } catch (err) {
      handleOpenAlert('Erro ao buscar novo cachorro, tente novamente', 500)
    }
  }

  const handleDisableButton = () => {
    return loading && dogUrl !== defaultDog
  }

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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              border: '5px solid black',
              borderRadius: '10px'
            }}
            width={{ xs: '100%', md: '50%' }}
            maxHeight="60vh"
            mb={4}
          >
            <img width="100%" src={dogUrl} alt="dog" />
          </Box>
        </Container>
        <Fab
          sx={{
            mb: 2,
            position: 'fixed',
            bottom: { xs: '3%', md: '1%' },
            left: { xs: '45%', md: '50%' }
          }}
          onClick={refreshDog}
          disabled={handleDisableButton()}
          color="secondary"
        >
          <RefreshIcon />
        </Fab>
      </>
    </CustomMainBox>
  )
}

export default Dog
