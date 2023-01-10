import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  SelectChangeEvent,
  Stack
} from '@mui/material'
import React from 'react'
import { FilterFormInterface } from '../../@types/FormTypes'
import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'

interface PropsInterface {
  formData: FilterFormInterface
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSelectChange: (
    event: SelectChangeEvent<'name' | 'email' | 'username'>
  ) => void
  handleFilter: (event: React.FormEvent) => void
  clearFilters: () => void
  clearButton: boolean
}

const HomeFilters: React.FC<PropsInterface> = ({
  formData,
  onInputChange,
  handleFilter,
  clearFilters,
  clearButton
}) => {
  const { text } = formData
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
      p={1.5}
      mb={2}
    >
      <Stack spacing={1} direction="row">
        <FormControl onSubmit={handleFilter} component="form">
          <InputLabel color="secondary">Buscar</InputLabel>
          <OutlinedInput
            onChange={onInputChange}
            name="text"
            value={text}
            color="secondary"
            label="Pesquisa"
            endAdornment={
              <InputAdornment position="end">
                <IconButton size="large" type="submit" color="secondary">
                  <SearchIcon fontSize="large" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {clearButton ? (
          <IconButton size="small" onClick={clearFilters}>
            <ClearIcon fontSize="small" color="secondary" />
          </IconButton>
        ) : null}
      </Stack>
    </Paper>
  )
}

export default HomeFilters
