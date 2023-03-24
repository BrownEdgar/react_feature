import React, {useState} from 'react'

export default function App() { 
	const [count, setCount] = useState(1)


	const handleFirstClick = () =>{
		setCount(count + 1)
	}

	const handleSecondClick = () =>{
		setCount(count - 1)
	}

	const handleThirdClick = () =>{
		setCount(0)
	}

	return (
		<div>
			<h1>{count}</h1>
			<div className='box'>
				<button onClick={handleFirstClick}>+</button>
				<button onClick={handleSecondClick}>-</button>
				<button onClick={handleThirdClick}>AC</button>
			</div>
		</div>
	)
}


// sarqel mi hat component vortex ka mek hat tiv ev erek hat kochak meky +1 a anum meky -1 a anum , meknel beruma zroyakani