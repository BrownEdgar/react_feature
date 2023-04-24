import React from 'react'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='App'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='signIn' element={<SignIn />} />
            <Route path='signUp' element={<SignUp />} />

        </Routes>

    </div>
  )
}
