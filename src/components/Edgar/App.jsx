import React, { useState } from 'react'
import classNames from 'classnames'

import './App.scss'

export default function App() {
	const [activeIndex, setActiveIndex] = useState();

	const handleClick = (index) => {
		setActiveIndex(index)
	}

	return (
		<div className='buttons'>
			{
				Array(5).fill().map((_, index) => {
					return <button
						key={index}
						onClick={() => handleClick(index)}
						className={classNames({
							active: index === activeIndex,
						})}
					>button-{index + 1}</button>
				})
			}
		</div>
	)
}
