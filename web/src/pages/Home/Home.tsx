import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Header } from '../../Components/Header'
import UsersTable from '../../Components/UsersTable/UsersTable'
import useAxios from '../../hooks/useAxios'

const axiosRequest = {
  url: 'https://randomuser.me/api/?page=1&results=5&seed=project',
  method: 'GET'
}

const Home: React.FC = () => {
  const { response, loading, newAxiosRequest } = useAxios(axiosRequest)
  const [page, setPage] = useState(1)

  const handleNextPage = () => {
    const newPage = page >= 10 ? 1 : page + 1

    newAxiosRequest({
      url: `https://randomuser.me/api/?page=${newPage}&results=5&seed=project`,
      method: 'GET'
    })
    setPage(newPage)
  }

  const handlePreviousPage = () => {
    const newPage = page <= 1 ? 10 : page - 1
    newAxiosRequest({
      url: `https://randomuser.me/api/?page=${newPage}&results=5&seed=project`,
      method: 'GET'
    })
    setPage(newPage)
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Header />
      {loading ? (
        'Carregando...'
      ) : (
        <UsersTable
          data={response}
          page={page}
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
        />
      )}
    </Box>
  )
}

export default Home
