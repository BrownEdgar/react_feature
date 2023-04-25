import React from 'react'

import Home from './pages/home/Home'
import Blog from './pages/Blog/Blog'
import Posts from './pages/Posts/Posts'

import {  Route, Routes } from 'react-router-dom'

import ErrorPage from './pages/404/ErrorPage'

import "./App.scss"
import Post from './pages/Post/Post'
import ROUTES from './routes/ROUTES'
import SignIn from './pages/signIn/SignIn'
import Layouts from './pages/Layouts/Layouts'
import PrivateRoutes from './pages/PrivateRoutes/PrivateRoutes'

export default function App() {
	return (
		<div className='App'>
		
			<Routes>
				<Route path='/' element={<Layouts />}>
					<Route  index element={<Home />} />
					<Route element={<PrivateRoutes />}>
						<Route path='blog' element={<Blog />} />
						<Route path='posts' element={<Posts />} />
						<Route path='posts/:id' element={<Post />} />
						<Route path='about' element={<Navigate to="/blog" />} />
					</Route>
					<Route path='signin' element={<SignIn />} />
					<Route path='*' element={<ErrorPage />} />
				</Route>



			</Routes>

		</div>
	)
}
