import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector } from "react-redux";
import axios from 'axios';

export default function App(data) {
	const count = useSelector(state => state.count)
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch({type: "add count"})
	}
	const handleClick1 = () => {
		dispatch({ type: "add-elem", payload: {item: "d"} })
	}
useEffect(() => {
	axios("https://jsonplaceholder.typicode.com/posts")
	.then(response => dispatch({
		tyoe: "add-posts",
		payload:{
			posts:response.data
		}
	}))
},[])
	return (
		<div>
			<h1>React-Redux| count:{count} </h1>
			<h1>{JSON.stringify(data)}</h1>
			<button onClick={handleClick}>add count</button>
			<button onClick={handleClick1}>add</button>
		</div>
	)
}
