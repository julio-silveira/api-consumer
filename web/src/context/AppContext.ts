import React, { Dispatch, SetStateAction } from 'react'
import FormType, { CostumerFormInterface } from '../@types/FormTypes'
import { ModalType } from '../@types/ModalTypes'

export interface ContextType {
  modalStatus: boolean
  handleModalClose: VoidFunction
  handleModalOpen: VoidFunction
  formData: FormType
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleStartCreatingCostumer: VoidFunction
  handleCreateCostumer: VoidFunction
  allCostumers: []
  setAllCostumers: Dispatch<SetStateAction<[]>>
  handleStartEditingCostumer: (_id: string) => void
  handleEditCostumer: VoidFunction
  handleDeleteCostumer: (_id: string) => void
  handleViewCostumerDetails: (_id: string) => void
  modalType: ModalType
  costumerDetails: CostumerFormInterface
}

const AppContext = React.createContext<ContextType | null>(null)

export default AppContext
