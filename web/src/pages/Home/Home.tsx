import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CustomMainBox } from '../../Components/CustomMainBox'
import { Header } from '../../Components/Header'
import { UsersTable } from '../../Components/UsersTable'
import { dataInterface } from '../../Components/UsersTable/UsersTable'
import useAxios from '../../hooks/useAxios'

const axiosRequest = {
  url: 'https://randomuser.me/api/?page=1&results=5&seed=project&noinfo',
  method: 'GET'
}

const Home: React.FC = () => {
  const { response, loading, newAxiosRequest } = useAxios(axiosRequest)
  const [usersData, setUsersData] = useState<dataInterface>({ results: [] })
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')

  const handleNextPage = () => {
    const newPage = page >= 10 ? 1 : page + 1
    newAxiosRequest({
      url: `https://randomuser.me/api/?page=${newPage}&results=5&seed=project&noinfo`,
      method: 'GET'
    })
    setPage(newPage)
  }

  const handlePreviousPage = () => {
    const newPage = page <= 1 ? 10 : page - 1
    newAxiosRequest({
      url: `https://randomuser.me/api/?page=${newPage}&results=5&seed=project&noinfo`,
      method: 'GET'
    })
    setPage(newPage)
  }

  useEffect(() => {
    if (!loading && response !== undefined) {
      setUsersData(response)
    }
  }, [response])

  return (
    <CustomMainBox>
      <>
        <Header />
        <Paper
          sx={{ alignItems: 'center', bgcolor: '#EFEFEF' }}
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
              width: '90%',
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
        {loading ? (
          'Carregando...'
        ) : (
          <UsersTable
            data={usersData}
            page={page}
            nextPage={handleNextPage}
            previousPage={handlePreviousPage}
          />
        )}
      </>
    </CustomMainBox>
  )
}

export default Home
