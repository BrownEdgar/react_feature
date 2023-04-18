import React from 'react'
import Home from './pages/home/Home'
import Posts from './pages/Posts/Posts'
import Post from './pages/Post/Post'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/404/ErrorPage'
import ROUTES from './routes/ROUTES'
import SignUp from './pages/signUp/SignUp'
import SignIn from './pages/signIn/SignIn'

import './App.scss'
import Layouts from './pages/Layouts/Layouts'

export default function App() {

	return (
		<div className='App'>
			<Routes>
				<Route path = "/" element = {<Layouts />}>	
					<Route index element={<Home />}/>
					<Route path={ROUTES.BLOG} element={<Navigate to = '/'/>}/>
					<Route path={ROUTES.POSTS} element={<Posts />}/>
					<Route path={ROUTES.POST} element={<Post />}/>
					<Route path={ROUTES.SIGNIN} element={<SignIn />}/>
					<Route path={ROUTES.SIGNUP} element={<SignUp />}/>
					<Route path= '*' element={<ErrorPage />}/>
				</Route>
			</Routes>
		</div>
	)
}
