import React, { useState } from 'react'
import { CostumerFormInterface } from '../@types/FormTypes'
import { ModalType } from '../@types/ModalTypes'
import { CostumerResponseInterface } from '../@types/ResponseTypes'
import {
  buildDeleteRequest,
  buildFormData,
  buildGetAllRequest,
  buildGetOneRequest,
  buildPostRequest,
  buildUpdateRequest
} from '../helpers/requestHelper'
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
  const [modalType, setModalType] = useState<ModalType>('create')
  const [onEditCostumerId, setOnEditCostumerId] = useState('')
  const { formData, setFormData, onInputChange } = useForm(initialCostumerForm)
  const { newAxiosRequest } = useAxios({})

  const handleGetAllCostumer = async () => {
    const newAllCostumers = await newAxiosRequest(buildGetAllRequest())
    setAllCostumers(newAllCostumers?.data)
  }

  const handleStartCreatingCostumer = () => {
    setModalType('create')
    handleModalOpen()
  }

  const handleCreateCostumer = async () => {
    const postRequest = buildPostRequest(formData as CostumerFormInterface)
    await newAxiosRequest(postRequest)
    setFormData(initialCostumerForm)
    await handleGetAllCostumer()
    handleModalClose()
  }

  const handleStartEditingCostumer = async (_id: string) => {
    const getOne = await newAxiosRequest(buildGetOneRequest(_id))
    if (getOne !== undefined) {
      setOnEditCostumerId(getOne.data._id)
      const newFormData = getOne.data as CostumerResponseInterface
      setFormData(buildFormData(newFormData))
      setModalType('edit')
      handleModalOpen()
    }
  }

  const handleEditCostumer = async () => {
    const putRequest = buildUpdateRequest(
      onEditCostumerId,
      formData as CostumerFormInterface
    )
    console.log(putRequest)

    await newAxiosRequest(putRequest)
    setFormData(initialCostumerForm)
    await handleGetAllCostumer()
    handleModalClose()
  }

  const handleDeleteCostumer = async (_id: string) => {
    await newAxiosRequest(buildDeleteRequest(_id))
    await handleGetAllCostumer()
  }

  const handleViewCostumerDetails = (_id: string) => {
    setModalType('view')
    handleModalOpen()
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
        handleStartCreatingCostumer,
        handleCreateCostumer,
        allCostumers,
        setAllCostumers,
        handleStartEditingCostumer,
        handleEditCostumer,
        handleDeleteCostumer,
        handleViewCostumerDetails,
        modalType
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default Provider
