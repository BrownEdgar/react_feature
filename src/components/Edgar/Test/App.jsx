import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import "./App.scss"

export default function App() {
	const [time, setTime] = useState(new Date())
	const [intervalId, setIntervalId] = useState(null)


	const startTimer = () => {
		const interval = setInterval(() => {
			setTime(new Date())
		}, 1000);
		setIntervalId(interval)
	}

	const stopTimer = () => {
		clearInterval(intervalId)
	}
	useEffect(() => {
		startTimer()
	}, [])

	return (
		<div>
			<div>
				<div className="time">
					<h1>{time.toLocaleTimeString()}</h1>
				</div>
				<div className="buttons">
					<button onClick={stopTimer}>stop</button>
					<button onClick={startTimer}>Start</button>
				</div>
			</div>
		</div>
	)
}

// uikit
// REST API
// all hooks
// vite
// graphQL
// typeSCRIPT
// O(n) algoritms
// findIndex map,filter 
// Sliider slick slider
 