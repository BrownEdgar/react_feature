import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {  addElem, getSum } from './countSlice';
export default function Count() {
	const count = useSelector(state => state.count)
	const dispatch = useDispatch();
	const handleClick = () => { 
		dispatch(addElem(84754))
	 }
	const handleClick2 = () => {
		dispatch(getSum())
	}
	return (
		<div>
			<h1>Count: {JSON.stringify(count)}</h1>
			<button onClick={handleClick}>add elemenet</button>
			<button onClick={handleClick2}>add elemenet</button>
		</div>
	)
}
