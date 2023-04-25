import React from 'react'

import Home from './pages/home/Home'
import Blog from './pages/Blog/Blog'
import Posts from './pages/Posts/Posts'
import Post from './pages/Post/Post'
import Navbar from './Navbar/Navbar'
import Signin from './pages/sign_in/sign_in'
import Signup from './pages/sign_up/sign_up'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/404/ErrorPage'
import ROUTES from './routes/ROUTES'

import "./App.scss"

export default function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />}/>
				<Route path={ROUTES.BLOG} element={<Blog />}/>
				<Route path={ROUTES.POSTS} element={<Posts />}/>
				<Route path={ROUTES.SIGNIN} element={<Signin />}/>
				<Route path={ROUTES.SIGNUP} element={<Signup />}/>
				<Route path={ROUTES.POST} element={<Post />}/>
				<Route path='*' element={<ErrorPage />}/>

			</Routes>

		</div>
	)
}
