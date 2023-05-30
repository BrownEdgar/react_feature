import axios from 'axios';
import React, { useState, useEffect } from 'react';
import dataJson from "./data.json"


import './App.css'


export default function App() {
	const [isActive, setIsActive] = useState(false)
	const [data] = useState(dataJson)
	const [activeId, setActiveId] = useState(0)


	const handleClick = () => { 
		setIsActive(!isActive)
	 }

	return (
		<div className='wrap'>
			<h1>{activeId}</h1>
			<div className={`box ${isActive ? 'active' : ""}`}>
				<div className='question'>
					<p>
						{data[activeId].question}
					</p>
					<button onClick={handleClick}>show answer</button>
					<button 
						onClick={() => setActiveId(activeId + 1) }
						disabled={activeId === data.length -1 }
						>next</button>
				</div>
				<div className='answer'>
					<p>
						{data[activeId].answer}
					</p>
					<button onClick={handleClick}>hide</button>
				</div>
			</div>
		</div>
	)
}



