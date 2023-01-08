import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { statusCodeInterface } from '../../@types/FormTypes'
import { CustomMainBox } from '../../components/CustomMainBox'
import { Header } from '../../components/Header'
import useForm from '../../hooks/useForm'

const baseUrl = 'https://http.cat/'
const sucessCode = 200

const buildUrl = (statusCode: number) => {
  return `${baseUrl}${statusCode}.jpg`
}

const Cat: React.FC = () => {
  const [imageUrl, setImageUrl] = useState(buildUrl(sucessCode))
  const { formData, onInputChange } = useForm({ statusCode: sucessCode })

  const { statusCode } = formData as statusCodeInterface
  const handleChangeImage = (event: React.FormEvent) => {
    event.preventDefault()
    setImageUrl(buildUrl(statusCode))
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
          <Paper elevation={5} sx={{ px: 4, py: 2, mb: 2, bgcolor: '#EFEFEF' }}>
            <Stack
              sx={{ alignItems: 'center' }}
              spacing={2}
              component="form"
              onSubmit={handleChangeImage}
            >
              <Typography
                color="secondary"
                sx={{ fontWeight: 700 }}
                variant="h5"
              >
                HTTP Cats
              </Typography>
              <TextField
                name="statusCode"
                value={statusCode}
                onChange={onInputChange}
                color="secondary"
                label="Código de erro"
              />
              <Button type="submit" variant="contained" color="secondary">
                Procurar
              </Button>
            </Stack>
          </Paper>
          <Box width={{ xs: '100%', md: '60%' }} mb={4}>
            <img width="100%" src={imageUrl} alt="cat" />
          </Box>
        </Container>
      </>
    </CustomMainBox>
  )
}

export default Cat
