import React from 'react'
import AppContext from './AppContext'

interface PropsInterface {
  children: React.ReactElement
}

const Provider: React.FC<PropsInterface> = ({ children }) => {
  const placeholder = 'placeholder'
  return (
    <AppContext.Provider value={{ placeholder }}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider
