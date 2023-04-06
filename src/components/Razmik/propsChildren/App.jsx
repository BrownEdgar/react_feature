import React, { useState, useEffect } from 'react'
import Users from './Users/Users'
import "./App.scss"



const API_KEY = process.env.REACT_APP_API_KEY

export default function App() {
	const [value, setValue] = useState([])
	useEffect(() => {
		async function getData() {
			const response = await fetch(`${API_KEY}/users`)
			const data = await response.json();
			setValue(data)
		}
		getData()

	}, [])

	const handleDelete = (id) => {
		const f = value.filter(user => user.id !== id);
		setValue(f)
	}

	return (
		<div className='container'>
			<Users users={value} handleDelete={handleDelete} />
		</div>
	)
}

