import React, { useState } from 'react'

export default function App() {
	const [name, setName] = useState("React.js")

	const [count, setCount] = useState(1)
	
	const handleClick = () => {
		const random = Math.trunc(Math.random() * 100)
		setCount(count + random)
		setName("Next.js")
	}
	return (
		<div>
			<h1>React Button: {count}</h1>
			<h1>Name: {name}</h1>
			<button onClick={handleClick}>Click me</button>
		</div>
	)
}
