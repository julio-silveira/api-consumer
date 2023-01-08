import React, { useState } from 'react'
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
  const { formData, onInputChange } = useForm(initialCostumerForm)

  const handleModalOpen = () => setModalStatus(true)
  const handleModalClose = () => setModalStatus(false)

  return (
    <AppContext.Provider
      value={{
        modalStatus,
        handleModalClose,
        handleModalOpen,
        formData,
        onInputChange
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default Provider
