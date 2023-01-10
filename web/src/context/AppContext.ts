import React, { Dispatch, SetStateAction } from 'react'
import { AlertInterface } from '../@types/AlertTypes'
import FormType, { CostumerFormInterface } from '../@types/FormTypes'
import { ModalType } from '../@types/ModalTypes'
import { CostumerResponseInterface } from '../@types/ResponseTypes'

export interface ContextType {
  modalStatus: boolean
  handleModalClose: VoidFunction
  handleModalOpen: VoidFunction
  modalType: ModalType

  formData: FormType
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void

  allCostumers: CostumerResponseInterface[]
  setAllCostumers: Dispatch<SetStateAction<CostumerResponseInterface[]>>
  costumerDetails: CostumerFormInterface

  handleStartCreatingCostumer: VoidFunction
  handleCreateCostumer: VoidFunction
  handleStartEditingCostumer: (_id: string) => void
  handleEditCostumer: VoidFunction
  handleDeleteCostumer: (_id: string) => void
  handleViewCostumerDetails: (_id: string) => void

  alert: AlertInterface
  handleOpenAlert: (message: string, statusCode: number) => void
  handleCloseAlert: VoidFunction
}

const AppContext = React.createContext<ContextType | null>(null)

export default AppContext
