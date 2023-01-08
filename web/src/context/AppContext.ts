import React from 'react'

export interface ContextType {
  modalStatus: boolean
  handleModalClose: () => void
  handleModalOpen: () => void
}

const AppContext = React.createContext<ContextType | null>(null)

export default AppContext
