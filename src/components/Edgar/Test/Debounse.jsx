import React, { useState, useEffect, useCallback } from 'react';
import Child from './Child';


export default function App() {
	const [data, setData] = useState([21, 45, 14, 10, -9, 87, 541, 21, 23, 203])
	const [count, setCount] = useState(0)

	const [value, setValue] = useState('')
	const [intervals, setIntervals] = useState(null)

	const sortedArray = useCallback(
		() => {
			return data.toSorted((a, b) => a - b)
		}, [])


	const handleChange = (e) => {
		if (intervals) {
			clearInterval(intervals)
		}
		const x = setTimeout(() => {
			console.log("value is changed")
			setValue(e.target.value)
		}, 500)
		setIntervals(x)
	}

	return (
		<div>
			<span>Value: {value}</span>
			<input type="range" min={0} max={1e4} step={100} onChange={handleChange}
			/>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>add count</button>
			<Child sortedArray={sortedArray} />
		</div>
	)
}


