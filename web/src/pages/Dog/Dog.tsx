import { Box, Container, Fab } from '@mui/material'
import { AxiosResponse } from 'axios'
import React, { useState } from 'react'
import { CustomMainBox } from '../../components/CustomMainBox'
import { Header } from '../../components/Header'
import useAxios from '../../hooks/useAxios'
import RefreshIcon from '@mui/icons-material/Refresh'

const baseUrl = 'https://random.dog/'
const defaultDog = `https://random.dog/e194cd94-32d1-45b8-943a-65fe1b3a839f.gif`

const axiosDogRequest = {
  url: `${baseUrl}woof`,
  method: 'GET'
}

const Dog: React.FC = () => {
  const { loading, newAxiosRequest } = useAxios({})
  const [dogUrl, setDogUrl] = useState(defaultDog)

  const refreshDog = async () => {
    const { data } = (await newAxiosRequest(axiosDogRequest)) as AxiosResponse
    const newDogUrl =
      !data || data.includes('mp4', 'webm') ? defaultDog : `${baseUrl}${data}`
    setDogUrl(newDogUrl)
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
          <Fab
            sx={{ mb: 2 }}
            onClick={refreshDog}
            disabled={handleDisableButton()}
            color="secondary"
          >
            <RefreshIcon />
          </Fab>

          <Box width={{ xs: '100%', md: '50%' }} mb={4}>
            <img width="100%" src={dogUrl} alt="dog" />
          </Box>
        </Container>
      </>
    </CustomMainBox>
  )
}

export default Dog
