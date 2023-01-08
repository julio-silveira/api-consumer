import React, { useState } from 'react'
import AppContext from './AppContext'

interface PropsInterface {
  children: React.ReactElement
}

const Provider: React.FC<PropsInterface> = ({ children }) => {
  const [modalStatus, setModalStatus] = useState(false)

  const handleModalOpen = () => setModalStatus(true)
  const handleModalClose = () => setModalStatus(false)

  return (
    <AppContext.Provider
      value={{ modalStatus, handleModalClose, handleModalOpen }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default Provider
