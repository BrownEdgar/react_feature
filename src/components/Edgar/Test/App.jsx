import React, { useState } from 'react'
import classNames from 'classnames'

import "./App.scss"

export default function App() {
	const [isActive, setIsActive] = useState(false)
	return (
		<div>
			<h1>Animation in react</h1>
			<hr />
			<div className={classNames('box', {
				active: isActive
			})}>
				<h2>Animation box</h2>
			</div>
			<hr />
			<button onClick={() => setIsActive(true)}>start</button>

		</div>
	)
}
