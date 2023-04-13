import React from 'react'

import Home from './pages/home/Home'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Blog from './pages/Blog/Blog'
import Posts from './pages/Posts/Posts'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/404/ErrorPage'

import "./App.scss"

export default function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/signUp' element={<SignUp />}/>
				<Route path='/signIn' element={<SignIn />}/>
				<Route path='/blog' element={<Blog />}/>
				<Route path='/posts' element={<Posts />}/>
				<Route path='/posts/:id' element={<Posts />}/>
				<Route path='*' element={<ErrorPage />}/>

			</Routes>

		</div>
	)
}
