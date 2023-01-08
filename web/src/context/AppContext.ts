import React, { Dispatch, SetStateAction } from 'react'
import FormType from '../@types/FormTypes'

export interface ContextType {
  modalStatus: boolean
  handleModalClose: () => void
  handleModalOpen: () => void
  formData: FormType
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleCreateCostumer: () => void
  allCostumers: []
  setAllCostumers: Dispatch<SetStateAction<[]>>
  handleStartEditingCostumer: (_id: string) => void
  handleDeleteCostumer: (_id: string) => void
  handleViewCostumerDetails: (_id: string) => void
}

const AppContext = React.createContext<ContextType | null>(null)

export default AppContext
