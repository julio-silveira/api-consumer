import React from 'react'
import FormType from '../@types/FormTypes'

export interface ContextType {
  modalStatus: boolean
  handleModalClose: () => void
  handleModalOpen: () => void
  formData: FormType
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleCreateCostumer: () => void
}

const AppContext = React.createContext<ContextType | null>(null)

export default AppContext
