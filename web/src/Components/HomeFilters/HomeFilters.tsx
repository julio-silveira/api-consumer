import {
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'

// interface PropsInterface {
//   children: React.ReactElement
// }

const HomeFilters: React.FC = () => {
  const [filter, setFilter] = useState('')
  return (
    <Paper
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#EFEFEF'
      }}
      component={Stack}
      spacing={1}
      mt={10}
      py={2}
      px={4}
    >
      <Typography variant="h6"> FILTRO</Typography>
      <TextField size="small" color="secondary" label="Pesquisa" />
      <RadioGroup
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <FormControlLabel
          value="nome"
          onChange={() => setFilter('name')}
          control={<Radio color="secondary" size="small" />}
          label="Nome"
        />
        <FormControlLabel
          value="email"
          onChange={() => setFilter('email')}
          control={<Radio color="secondary" size="small" />}
          label="Email"
        />
        <FormControlLabel
          value="username"
          onChange={() => setFilter('username')}
          control={<Radio color="secondary" size="small" />}
          label="Username"
        />
      </RadioGroup>

      <Button variant="contained" color="secondary">
        Pesquisar
      </Button>
    </Paper>
  )
}

export default HomeFilters
