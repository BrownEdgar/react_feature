import React from 'react'
import CustomHook from './hooks/CustomHook'
import CustomFetchApi from './hooks/CustomFetchApi'

export default function App() {
	const [arr, { sorted, add, check } ] = CustomHook([21,54,69,8,5,30,87,154,27,986])

	const { data } = CustomFetchApi("https://jsonplaceholder.typicode.com", {
		target: 'users',
		limit: 8,
	})

	return (
		<div>
			<h1>
				<pre>{JSON.stringify(data,null,1)}</pre>
			</h1>
			<h1>{arr.join(' | ')}</h1>
			<button onClick={sorted}>sorted</button>
			<button onClick={() => add(19)}>add 157</button>
			<button onClick={() => check(25)}>check</button>
		</div>
	)
}


