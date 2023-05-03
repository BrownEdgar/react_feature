import axios from 'axios'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {

	const {count, data, posts, person, data1} = useSelector(state => state)
	const dispatch = useDispatch()
	const handleClick = () => {
		dispatch({type: 'add-count'})
	}
	const changeAge = () => {
		dispatch({type: "change-age"})
	}
	const handleClick1 = () => {
		dispatch({type: 'start-6'})
	}
	const addElement = () => {
		dispatch({ type: 'add-elem', payload: {item: "d"}})
	}

	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/posts?_limit=4')
		.then(response => dispatch({type: "add-posts", payload: {
			posts:response.data
		}
	}))
	}, [])

	return (
		<div>
			<h1>React redux | count: {count}</h1>
			<h1>{JSON.stringify(data)}</h1>
			<h1>{JSON.stringify(person)}</h1>
			<pre>
				{JSON.stringify(posts,null,1)}
			</pre>
			<h1>count: {count}</h1>
			<button onClick={handleClick}>add button</button>
			<button onClick={addElement}>add D</button>
			<button onClick={changeAge}>change age</button>
			<button onClick={handleClick1}>get number of 6</button>
		</div>
	)
}
