import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  SelectChangeEvent,
  Stack,
  Typography
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
      py={1}
      pb={2}
      px={4}
      my={12}
      mb={2}
    >
      <Typography
        pb={1}
        color="secondary"
        variant="body1"
        sx={{ fontWeight: 700 }}
      >
        FILTROS
      </Typography>

      <Stack direction="row">
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
          <IconButton onClick={clearFilters}>
            <ClearIcon color="secondary" />
          </IconButton>
        ) : null}
      </Stack>
    </Paper>
  )
}

export default HomeFilters
