import React from 'react'

import Home from './pages/home/Home'
import Blog from './pages/Blog/Blog'
import Posts from './pages/Posts/Posts'
import Navbar from './Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/404/ErrorPage'

import "./App.scss"
import Post from './pages/Post/Post'
import ROUTES from './routes/ROUTES'

export default function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />}/>
				<Route path={ROUTES.BLOG} element={<Blog />}/>
				<Route path={ROUTES.POSTS} element={<Posts />}/>
				<Route path={ROUTES.POST} element={<Post/>}/>
				<Route path='*' element={<ErrorPage />}/>

			</Routes>

		</div>
	)
}
