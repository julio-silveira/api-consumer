import {
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import { FilterFormInterface } from '../../@types/FormTypes'

interface PropsInterface {
  formData: FilterFormInterface
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSelectChange: (
    event: SelectChangeEvent<'user' | 'email' | 'username'>
  ) => void
}

const HomeFilters: React.FC<PropsInterface> = ({
  formData,
  onInputChange,
  onSelectChange
}) => {
  const { text, filter } = formData
  return (
    <Paper
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#EFEFEF'
      }}
      elevation={4}
      component={Stack}
      spacing={1}
      mt={10}
      py={2}
      px={4}
    >
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        FILTRO
      </Typography>

      <TextField
        onChange={onInputChange}
        name="text"
        value={text}
        size="small"
        color="secondary"
        label="Pesquisa"
      />

      <FormControl fullWidth>
        <InputLabel color="secondary">Tipo</InputLabel>
        <Select
          name="filter"
          color="secondary"
          size="small"
          value={filter}
          label="Tipo"
          onChange={onSelectChange}
        >
          <MenuItem value="name">Nome</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="username">Usuário</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="secondary">
        Pesquisar
      </Button>
    </Paper>
  )
}

export default HomeFilters
