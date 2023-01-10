import {
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { statusCodeInterface } from '../../@types/FormTypes'
import { CustomMainBox } from '../../components/CustomMainBox'
import { Header } from '../../components/Header'
import useForm from '../../hooks/useForm'
import SearchIcon from '@mui/icons-material/Search'
import AppContext, { ContextType } from '../../context/AppContext'

const baseUrl = 'https://http.cat/'
const sucessCode = 200

const buildUrl = (statusCode: number) => {
  return `${baseUrl}${statusCode}`
}

const Cat: React.FC = () => {
  const { handleOpenAlert } = useContext(AppContext) as ContextType

  const [imageUrl, setImageUrl] = useState(buildUrl(sucessCode))
  const { formData, onInputChange } = useForm({ statusCode: sucessCode })

  const { statusCode } = formData as statusCodeInterface

  const handleChangeImage = async (event: React.FormEvent) => {
    event.preventDefault()
    if (statusCode < 100 || statusCode >= 600) {
      setImageUrl(buildUrl(404))
      handleOpenAlert('Código inválido', 400)
    } else {
      setImageUrl(buildUrl(statusCode))
    }
  }

  return (
    <>
      <Header />
      <CustomMainBox>
        <>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Paper
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#EFEFEF'
              }}
              elevation={4}
              component={Stack}
              spacing={1}
              p={1.5}
              mb={2}
            >
              <FormControl component="form" onSubmit={handleChangeImage}>
                <InputLabel color="secondary">Buscar</InputLabel>
                <OutlinedInput
                  name="statusCode"
                  value={statusCode}
                  onChange={onInputChange}
                  color="secondary"
                  label="Buscar"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton size="large" type="submit" color="secondary">
                        <SearchIcon fontSize="large" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Paper>
            <Box width={{ xs: '100%', md: '60%' }} mb={4}>
              <img width="100%" src={imageUrl} alt="cat" />
            </Box>
          </Container>
        </>
      </CustomMainBox>
    </>
  )
}

export default Cat
