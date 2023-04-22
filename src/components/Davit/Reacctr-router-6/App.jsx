import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Navbar/Pages/Home/Home'
import Blog from './Navbar/Pages/Blog/Blog'
import Posts from './Navbar/Pages/Posts/Posts'
import ErrorPage from './Navbar/Pages/404/ErrorPage'
import { Route , Routes } from 'react-router-dom'
import "./App.scss" 

export default function App() {
return (
<div className='App'>
  <Navbar />
 <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/blog' element={<Blog />}/>
  <Route path='/posts' element={<Posts />}/>
  <Route path='*' element={<ErrorPage />}/>
 </Routes>

</div>
)
}