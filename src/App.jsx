import React from 'react'

import "./App.css"

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Posts from './components/Posts'
import Basket from './components/Basket'
import Navbar from './components/Navbar'
import Layouts from './components/Layouts'

export default function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layouts />}>
				<Route index element={<Posts />} />
				<Route path='/basket' element={<Basket />} />
			</Route>
		)
	)



	return (
		<div className='App'>

			<RouterProvider  router={router} />
		</div>
	)
}
