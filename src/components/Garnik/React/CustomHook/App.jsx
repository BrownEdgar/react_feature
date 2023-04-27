import React from 'react'
import CustomHook from './hooks/CustomHook'
export default function App() {
	const [arr, { sorted, add, removeByIndex, toJson }] = CustomHook
	([21,24,56,877,98])

	return (
		<div>
			<h1>{arr.join(" | ")}</h1>
			<button></button>
		</div>
		
	)
}
