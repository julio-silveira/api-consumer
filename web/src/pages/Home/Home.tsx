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
import React, { useEffect, useState } from 'react'
import { CustomMainBox } from '../../Components/CustomMainBox'
import { Header } from '../../Components/Header'
import HomeFilters from '../../Components/HomeFilters/HomeFilters'
import { UsersTable } from '../../Components/UsersTable'
import { dataInterface } from '../../Components/UsersTable/UsersTable'
import useAxios from '../../hooks/useAxios'

const axiosPagedRequest = (page: number) => ({
  url: `https://randomuser.me/api/?page=${page}&results=5&seed=project&noinfo`,
  method: 'GET'
})

const Home: React.FC = () => {
  const { response, loading, newAxiosRequest } = useAxios(axiosPagedRequest(1))
  const [usersData, setUsersData] = useState<dataInterface>({ results: [] })
  const [page, setPage] = useState(1)

  const updateResponseWithPagedRequest = (newPageNumber: number) => {
    newAxiosRequest(axiosPagedRequest(newPageNumber))
    setPage(newPageNumber)
  }

  const handleNextPage = () => {
    const newPage = page >= 10 ? 1 : page + 1
    updateResponseWithPagedRequest(newPage)
  }

  const handlePreviousPage = () => {
    const newPage = page <= 1 ? 10 : page - 1
    updateResponseWithPagedRequest(newPage)
  }

  useEffect(() => {
    if (response !== undefined) {
      setUsersData(response)
    }
  }, [response])

  return (
    <CustomMainBox>
      <>
        <Header />
        <HomeFilters />
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
