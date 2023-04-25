import React from 'react'

import Home from './pages/home/Home'
import Blog from './pages/Blog/Blog'
import Posts from './pages/Posts/Posts'
import Navbar from './Navbar/Navbar'
import Post from "./pages/Post/Post";
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/404/ErrorPage'
import "./App.scss"


export default function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/blog' element={<Blog />}/>
				<Route path='/posts' element={<Posts />} />
				<Route path='/posts/:id' element={<Post />} />
				<Route path='*' element={<ErrorPage />}/>

			</Routes>

		</div>
	)
}
