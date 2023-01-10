import React, { useContext, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  TextField
} from '@mui/material'

import { CustomMainBox } from '../../components/CustomMainBox'
import useForm from '../../hooks/useForm'
import useAxios from '../../hooks/useAxios'
import {
  getRemember,
  saveRemember,
  saveToken
} from '../../helpers/localStorageHelper'
import { useNavigate } from 'react-router-dom'
import { LoginFormInterface } from '../../@types/FormTypes'
import AppContext, { ContextType } from '../../context/AppContext'
import { CustomErrorResponseDataInterface } from '../../@types/CustomErrorResponse'
import { LoginResponseInterface } from '../../@types/ResponseTypes'

const initialState = { username: '', password: '' }

const Login: React.FC = () => {
  const { handleOpenAlert } = useContext(AppContext) as ContextType
  const navigate = useNavigate()
  const [remember, setRemember] = useState(false)
  const { formData, onInputChange } = useForm(initialState)
  const { newAxiosRequest } = useAxios({})

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const { username, password } = formData as LoginFormInterface
    const axiosResponse = (await newAxiosRequest({
      url: 'http://localhost:3000/users/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        username: username,
        password: password
      }
    })) as LoginResponseInterface
    const axiosError =
      axiosResponse as unknown as CustomErrorResponseDataInterface
    if (axiosResponse.access_token !== undefined) {
      saveRemember(remember)
      saveToken(axiosResponse?.access_token)
      handleOpenAlert('Login efetuado com sucesso', 200)
      return navigate('/home')
    } else if (axiosError.error !== undefined) {
      const { message, statusCode } = axiosError
      handleOpenAlert(message, statusCode || 401)
    }
  }

  useEffect(() => {
    if (getRemember()) navigate('/home')
  }, [])

  const { username, password } = formData as LoginFormInterface
  return (
    <CustomMainBox sx={{ justifyContent: 'center', mt: 0 }}>
      <>
        <Paper
          component={Stack}
          elevation={6}
          spacing={{ xs: 0, sm: 1 }}
          width={{ xs: '90%', sm: '340px' }}
          sx={{ bgcolor: '#EFEFEF' }}
        >
          <Stack
            onSubmit={handleSubmit}
            component="form"
            spacing={1}
            py={6}
            px={3}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }} pb={3}>
              <img
                width="100%"
                src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
                alt="SharenergyLogo"
              />
            </Box>
            <TextField
              color="secondary"
              name="username"
              value={username}
              onChange={onInputChange}
              type="text"
              label="Nome de usuário"
            />
            <TextField
              color="secondary"
              name="password"
              value={password}
              onChange={onInputChange}
              type="password"
              label="Senha"
            />
            <FormControlLabel
              sx={{ justifyContent: 'center' }}
              onChange={() => setRemember(!remember)}
              control={<Checkbox color="secondary" />}
              label="Lembrar de mim?"
            />
            <Button type="submit" color="secondary" variant="contained">
              Entrar
            </Button>
          </Stack>
        </Paper>
      </>
    </CustomMainBox>
  )
}

export default Login
