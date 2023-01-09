import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Cat } from './pages/Cat'
import { Costumer } from './pages/Costumer'
import { Dog } from './pages/Dog'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cats" element={<Cat />} />
      <Route path="/dogs" element={<Dog />} />
      <Route path="/costumers" element={<Costumer />} />
    </Routes>
  )
}

export default App
