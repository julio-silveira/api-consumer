import React, { useState } from 'react'
import { CostumerFormInterface } from '../@types/FormTypes'
import { buildPostRequest } from '../helpers/requestHelper'
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
  const [modalStatus, setModalStatus] = useState(false)
  const { formData, setFormData, onInputChange } = useForm(initialCostumerForm)
  const { newAxiosRequest } = useAxios({})

  const handleCreateCostumer = async () => {
    const postRequest = buildPostRequest(formData as CostumerFormInterface)
    console.log(postRequest)

    await newAxiosRequest(postRequest)
    setFormData(initialCostumerForm)
    handleModalClose()
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
        handleCreateCostumer
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default Provider
