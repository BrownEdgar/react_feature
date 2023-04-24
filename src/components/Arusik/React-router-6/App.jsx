import React from 'react'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Posts from './pages/Posts/Posts'
import ErrorPage from './pages/404/Errorpage'


import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import './App.scss'

export default function App() {
  return (
    <div className='App'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    </div>
  )
}
