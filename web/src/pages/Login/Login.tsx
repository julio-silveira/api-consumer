import React, { useState } from 'react'
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

const initialState = { username: '', password: '' }

const Login: React.FC = () => {
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
    console.log(axiosResponse)
  }

  const { username, password } = formData
  return (
    <CustomMainBox
      sx={{
        backgroundImage:
          'url("https://finestwp.co/demos/wp/shadepro/wp-content/uploads/2020/10/pattern-2.png")'
      }}
    >
      <Paper
        component={Stack}
        spacing={{ xs: 0, sm: 1 }}
        width={{ xs: '90%', sm: '30%' }}
      >
        <Stack
          onSubmit={handleSubmit}
          component="form"
          spacing={1}
          py={2}
          px={3}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }} pb={1}>
            <img
              width="80%"
              src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              alt="ShareEnergyLogo"
            />
          </Box>
          <TextField
            name="username"
            value={username}
            onChange={onInputChange}
            size="small"
            type="text"
            label="Nome de usuário"
          />
          <TextField
            name="password"
            value={password}
            onChange={onInputChange}
            size="small"
            type="password"
            label="Senha"
          />
          <FormControlLabel
            onChange={() => setRemember(!remember)}
            control={<Checkbox size="small" />}
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
