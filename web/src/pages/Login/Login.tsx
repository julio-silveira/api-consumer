import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  TextField
} from '@mui/material'

import { CustomMainBox } from '../../Components/CustomMainBox'
import useForm from '../../hooks/useForm'
import useAxios from '../../hooks/useAxios'
import {
  getRemember,
  saveRemember,
  saveToken
} from '../../helpers/localStorageHelper'
import { useNavigate } from 'react-router-dom'

const initialState = { username: '', password: '' }

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [remember, setRemember] = useState(false)
  const { formData, onInputChange } = useForm(initialState)
  const { newAxiosRequest } = useAxios({})

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const axiosResponse = await newAxiosRequest({
      url: 'http://localhost:3000/users/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        username: formData.username,
        password: formData.password
      }
    })

    if (axiosResponse?.status === 200) {
      saveRemember(remember)
      saveToken(axiosResponse?.data.access_token)
      return navigate('/home')
    }
  }

  useEffect(() => {
    if (getRemember()) navigate('/home')
  }, [])

  const { username, password } = formData
  return (
    <CustomMainBox>
      <Paper
        component={Stack}
        elevation={6}
        spacing={{ xs: 0, sm: 1 }}
        width={{ xs: '90%', sm: '30%' }}
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
              width="80%"
              src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              alt="SharenergyLogo"
            />
          </Box>
          <TextField
            color="secondary"
            name="username"
            value={username}
            onChange={onInputChange}
            size="small"
            type="text"
            label="Nome de usuário"
          />
          <TextField
            color="secondary"
            name="password"
            value={password}
            onChange={onInputChange}
            size="small"
            type="password"
            label="Senha"
          />
          <FormControlLabel
            sx={{ justifyContent: 'center' }}
            onChange={() => setRemember(!remember)}
            control={<Checkbox color="secondary" size="small" />}
            label="Lembrar de mim?"
          />
          <Button type="submit" color="secondary" variant="contained">
            Entrar
          </Button>
        </Stack>
      </Paper>
    </CustomMainBox>
  )
}

export default Login
