import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import LoginSignUp from './views/LoginSignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster/>
        <Routes>
          <Route path='/' element={<LoginSignUp />} />
        </Routes>
    
    </BrowserRouter>

  )
}

export default App