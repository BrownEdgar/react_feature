import React, { useContext } from 'react'
import { MyContext } from './App'

export default function Child() {
	const data = useContext(MyContext)
		console.log(data)
	return (
		<div>
			<h2>value: {data.value.toString()}</h2>
			<button>change Value</button>
		</div>
	)
}
