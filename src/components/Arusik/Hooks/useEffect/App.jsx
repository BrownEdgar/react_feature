import React, { useState, useEffect } from 'react'
import Posts from './Posts/Posts';
import MyLoader from './Loader/MyLoader';

import "./App.scss"

const API_KEY = process.env.REACT_APP_API_KEY;
export default function App() {
	const [value, setValue] = useState([]);
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		async function getData() {
			setIsLoading(true)
			const response = await fetch(`${API_KEY}/posts`)
			const data = await response.json();
			setTimeout(() => { 
				setIsLoading(false)
			 }, 2000)
			setValue(data)
		}
		getData()

	}, [])

	return (
		<div className='container'>
			{isLoading 
			? <MyLoader />
			: <Posts posts={value}/>
		}
		</div>
	)
}