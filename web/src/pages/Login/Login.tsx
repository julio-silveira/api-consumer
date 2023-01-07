import {
  Box,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  TextField
} from '@mui/material'
import React from 'react'

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://finestwp.co/demos/wp/shadepro/wp-content/uploads/2020/10/pattern-2.png")',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Paper
        component={Stack}
        spacing={{ xs: 0, sm: 1 }}
        width={{ xs: '90%', sm: '30%' }}
      >
        <Stack component="form" spacing={1}>
          <Box pb={1}>
            <img
              width={250}
              src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png"
              alt="ShareEnergyLogo"
            />
          </Box>
          <TextField type="text" label="Nome de Usuário" />
          <TextField type="password" label="Senha" />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Lembrar de mim?"
          />
        </Stack>
      </Paper>
    </Box>
  )
}

export default Login
