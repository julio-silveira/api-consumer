import React, { useState } from 'react'
import { AlertInterface } from '../@types/AlertTypes'
import { CustomErrorResponseDataInterface } from '../@types/CustomErrorResponse'
import { CostumerFormInterface } from '../@types/FormTypes'
import { ModalType } from '../@types/ModalTypes'
import { CostumerResponseInterface } from '../@types/ResponseTypes'
import { getAlertType } from '../helpers/alert'
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

const initialAlertState = {
  message: '',
  type: 'error',
  open: false
} as AlertInterface

const Provider: React.FC<PropsInterface> = ({ children }) => {
  const [modalStatus, setModalStatus] = useState(false)
  const [modalType, setModalType] = useState<ModalType>('create')

  const [alert, setAlert] = useState<AlertInterface>(initialAlertState)

  const [costumerDetails, setCostumerDetails] =
    useState<CostumerFormInterface>(initialCostumerForm)
  const [allCostumers, setAllCostumers] = useState<CostumerResponseInterface[]>(
    []
  )
  const [onEditCostumerId, setOnEditCostumerId] = useState('')
  const { formData, setFormData, onInputChange } = useForm(initialCostumerForm)
  const { newAxiosRequest } = useAxios({})

  const handleGetAllCostumer = async () => {
    const newAllCostumers = await newAxiosRequest(buildGetAllRequest())
    setAllCostumers(newAllCostumers as CostumerResponseInterface[])
  }

  const handleStartCreatingCostumer = () => {
    setModalType('create')
    handleModalOpen()
  }

  const handleCreateCostumer = async () => {
    try {
      const postRequest = buildPostRequest(formData as CostumerFormInterface)
      const postResponse = await newAxiosRequest(postRequest)
      console.log(postResponse)
      const postError = postResponse as CustomErrorResponseDataInterface
      if (postResponse !== undefined && postError.error === undefined) {
        handleOpenAlert('Cliente cadastrado com sucesso', 201)
      } else {
        handleOpenAlert(postError.message, postError.statusCode)
      }
    } catch (err) {
      handleOpenAlert('Erro interno ', 500)
    } finally {
      setFormData(initialCostumerForm)
      await handleGetAllCostumer()
      handleModalClose()
    }
  }

  const handleStartEditingCostumer = async (_id: string) => {
    try {
      const getOne = await newAxiosRequest(buildGetOneRequest(_id))
      if (getOne !== undefined) {
        const { _id } = getOne as CostumerResponseInterface
        setOnEditCostumerId(_id)
        const newFormData = getOne as CostumerResponseInterface
        setFormData(buildFormData(newFormData))
        setModalType('edit')
        handleModalOpen()
      }
    } catch (err) {
      handleOpenAlert('Erro interno, tente novamente', 500)
    }
  }

  const handleEditCostumer = async () => {
    try {
      const putRequest = buildUpdateRequest(
        onEditCostumerId,
        formData as CostumerFormInterface
      )
      const patchRequest = await newAxiosRequest(putRequest)
      const patchError = patchRequest as CustomErrorResponseDataInterface
      if (patchRequest !== undefined && patchError.error === undefined) {
        handleOpenAlert('Cliente editado com sucesso', 200)
      } else {
        handleOpenAlert(patchError.message, patchError.statusCode)
      }
    } catch (err) {
      handleOpenAlert('Erro interno, tente novamente', 500)
    } finally {
      setFormData(initialCostumerForm)
      await handleGetAllCostumer()
      handleModalClose()
    }
  }

  const handleDeleteCostumer = async (_id: string) => {
    try {
      await newAxiosRequest(buildDeleteRequest(_id))
      await handleGetAllCostumer()
      handleOpenAlert('Cliente removido com sucesso', 200)
    } catch (err) {
      handleOpenAlert('Erro interno, tente novamente', 500)
    }
  }

  const handleViewCostumerDetails = async (_id: string) => {
    try {
      const getOne = await newAxiosRequest(buildGetOneRequest(_id))
      if (getOne !== undefined) {
        setCostumerDetails(buildFormData(getOne as CostumerResponseInterface))
        setModalType('view')
        handleModalOpen()
      }
    } catch (err) {
      handleOpenAlert('Erro interno, tente novamente', 500)
    }
  }

  const handleModalOpen = () => setModalStatus(true)
  const handleModalClose = () => setModalStatus(false)

  const handleCloseAlert = () => setAlert(initialAlertState)

  const handleOpenAlert = (message: string, statusCode: number) => {
    const type = getAlertType(statusCode)
    setAlert({ message, type, open: true })
  }

  return (
    <AppContext.Provider
      value={{
        modalStatus,
        handleModalClose,
        handleModalOpen,
        modalType,

        formData,
        onInputChange,

        allCostumers,
        setAllCostumers,
        costumerDetails,

        handleStartCreatingCostumer,
        handleCreateCostumer,
        handleStartEditingCostumer,
        handleEditCostumer,
        handleDeleteCostumer,
        handleViewCostumerDetails,

        alert,
        handleOpenAlert,
        handleCloseAlert
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default Provider
