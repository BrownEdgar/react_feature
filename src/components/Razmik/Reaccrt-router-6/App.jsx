import React from 'react'
import Home from './pages/home/Home'
import Blog from './pages/Blog/Blog'
import Posts from './pages/Posts/Posts'
import Navbar from './Navbar/Navbar'
import Post from './pages/Post/Post'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/404/ErrorPage'
import ROUTES from './routes/ROUTES'
import SignUp from './pages/signUp/SignUp'
import SignIn from './pages/signIn/SignIn'

import './App.scss'

export default function App() {

	return (
		<div className='App'>
			<Navbar />
			<Routes>	
				<Route path={ROUTES.HOME} element={<Home />}/>
				<Route path={ROUTES.BLOG} element={<Blog />}/>
				<Route path={ROUTES.POSTS} element={<Posts />}/>
				<Route path={ROUTES.POST} element={<Post />}/>
				<Route path={ROUTES.SIGNIN} element={<SignIn />}/>
				<Route path={ROUTES.SIGNUP} element={<SignUp />}/>
				<Route path= '*' element={<ErrorPage />}/>
			</Routes>
		</div>
	)
}
