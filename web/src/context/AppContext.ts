import React from 'react'

export interface ContextType {
  placeholder: string
}

const AppContext = React.createContext<ContextType | null>(null)

export default AppContext
