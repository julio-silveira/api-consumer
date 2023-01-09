import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Cat } from './pages/Cat'
import { Costumer } from './pages/Costumer'
import { Dog } from './pages/Dog'
import { NotFound } from './pages/NotFound'
import CustomAlert from './components/CustomAlert/CustomAlert'
import AppContext, { ContextType } from './context/AppContext'

function App() {
  const {
    alert: { open }
  } = useContext(AppContext) as ContextType
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cats" element={<Cat />} />
        <Route path="/dogs" element={<Dog />} />
        <Route path="/costumers" element={<Costumer />} />
      </Routes>
      {open ? <CustomAlert /> : null}
    </>
  )
}

export default App
