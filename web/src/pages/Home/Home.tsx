import React, { useEffect, useState } from 'react'
import { FilterFormInterface } from '../../@types/FormTypes'
import { CustomMainBox } from '../../Components/CustomMainBox'
import { Header } from '../../Components/Header'
import HomeFilters from '../../Components/HomeFilters/HomeFilters'
import { UsersTable } from '../../Components/UsersTable'
import { filterResponse } from '../../helpers/filters'
import useAxios from '../../hooks/useAxios'
import useForm from '../../hooks/useForm'

const PAGE_SIZE = 5

const axiosPagedRequest = (page: number) => ({
  url: `https://randomuser.me/api/?page=${page}&results=${PAGE_SIZE}&seed=project&noinfo`,
  method: 'GET'
})

const formInitialState: FilterFormInterface = { text: '', filter: '' }

const Home: React.FC = () => {
  const { response, loading, newAxiosRequest } = useAxios(axiosPagedRequest(1))
  const [usersData, setUsersData] = useState<[]>([])
  const [page, setPage] = useState(1)
  const [actualFilters, setActualFilters] =
    useState<FilterFormInterface>(formInitialState)
  const [clearButton, setClearButton] = useState(false)
  const { formData, setFormData, onInputChange, onSelectChange } =
    useForm(formInitialState)

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

  const handleFilter = () => {
    setActualFilters(formData as FilterFormInterface)
    setClearButton(true)
  }

  const clearFilters = () => {
    setFormData(formInitialState)
    setActualFilters(formInitialState)
    setClearButton(false)
  }

  useEffect(() => {
    if (response !== undefined) {
      const data = filterResponse(actualFilters, response['results'])
      setUsersData(data)
    }
  }, [response, handleFilter])

  return (
    <CustomMainBox>
      <>
        <Header />
        <HomeFilters
          formData={formData as FilterFormInterface}
          onInputChange={onInputChange}
          onSelectChange={onSelectChange}
          handleFilter={handleFilter}
          clearFilters={clearFilters}
          clearButton={clearButton}
        />
        <UsersTable
          loading={loading}
          data={usersData}
          page={page}
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
          pageSize={PAGE_SIZE}
        />
      </>
    </CustomMainBox>
  )
}

export default Home
