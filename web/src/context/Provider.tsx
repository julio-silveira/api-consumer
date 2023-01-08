import React, { useState } from 'react'
import { CostumerFormInterface } from '../@types/FormTypes'
import { buildGetAllRequest, buildPostRequest } from '../helpers/requestHelper'
import useAxios from '../hooks/useAxios'
import useForm from '../hooks/useForm'
import AppContext from './AppContext'

interface PropsInterface {
  children: React.ReactElement
}

const initialCostumerForm = {
  name: '',
  cpf: '',
  email: '',
  phone: '',
  postalCode: '',
  state: '',
  city: '',
  street: '',
  number: '',
  complement: ''
}

const Provider: React.FC<PropsInterface> = ({ children }) => {
  const [allCostumers, setAllCostumers] = useState<[]>([])
  const [modalStatus, setModalStatus] = useState(false)
  const { formData, setFormData, onInputChange } = useForm(initialCostumerForm)
  const { newAxiosRequest } = useAxios({})

  const handleGetAllCostumer = async () => {
    const newAllCostumers = await newAxiosRequest(buildGetAllRequest())
    setAllCostumers(newAllCostumers?.data)
  }

  const handleCreateCostumer = async () => {
    const postRequest = buildPostRequest(formData as CostumerFormInterface)
    await newAxiosRequest(postRequest)
    setFormData(initialCostumerForm)
    await handleGetAllCostumer()
    handleModalClose()
  }

  const handleStartEditingCostumer = (_id: string) => {
    console.log(_id)
  }

  const handleDeleteCostumer = (_id: string) => {
    console.log(_id)
  }

  const handleViewCostumerDetails = (_id: string) => {
    console.log(_id)
  }

  const handleModalOpen = () => setModalStatus(true)
  const handleModalClose = () => setModalStatus(false)

  return (
    <AppContext.Provider
      value={{
        modalStatus,
        handleModalClose,
        handleModalOpen,
        formData,
        onInputChange,
        handleCreateCostumer,
        allCostumers,
        setAllCostumers,
        handleStartEditingCostumer,
        handleDeleteCostumer,
        handleViewCostumerDetails
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default Provider
