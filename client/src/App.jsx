import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import LoginSignUp from './views/LoginSignUp'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginSignUp/>}/>
        </Routes>
     </BrowserRouter>
  )
}

export default App