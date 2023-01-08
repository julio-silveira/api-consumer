import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import React from 'react'
import { FilterFormInterface } from '../../@types/FormTypes'
import ClearIcon from '@mui/icons-material/Clear'

interface PropsInterface {
  formData: FilterFormInterface
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSelectChange: (
    event: SelectChangeEvent<'name' | 'email' | 'username'>
  ) => void
  handleFilter: () => void
  clearFilters: () => void
  clearButton: boolean
}

const HomeFilters: React.FC<PropsInterface> = ({
  formData,
  onInputChange,
  onSelectChange,
  handleFilter,
  clearFilters,
  clearButton
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
      <Typography color="secondary" variant="body1" sx={{ fontWeight: 700 }}>
        FILTROS
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
      <Stack direction="row">
        <Button onClick={handleFilter} variant="contained" color="secondary">
          Pesquisar
        </Button>
        {clearButton ? (
          <IconButton onClick={clearFilters}>
            <ClearIcon color="secondary" />
          </IconButton>
        ) : null}
      </Stack>
    </Paper>
  )
}

export default HomeFilters
