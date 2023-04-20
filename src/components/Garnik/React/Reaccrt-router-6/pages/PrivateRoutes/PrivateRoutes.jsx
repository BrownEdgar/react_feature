import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoutes() {
	const [isLogin, setIsLogin] = useState(!!window.localStorage.getItem("admin"))
	return (
		<>
			{isLogin ? <Outlet /> : <Navigate to='/signin'/>}
		</>
	)
}
