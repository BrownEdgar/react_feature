import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
	const count = useSelector(state => state.count)
const data=useSelector(state => state.data)

	const dispatch = useDispatch()
	const handleClick = () => { 
		dispatch({type: "Age"}) 
	 }
	const handleClick1 = () => { 
		dispatch({type:'find_6'})
	 }

	return (
		<div>
			<h1>count: {count}</h1>
			<button onClick={handleClick}>Age</button>
			<button onClick={handleClick1}>get number of 6</button>
			
		</div>
	)
}
