import React, {useState} from 'react'

export default function App() { 
	const [count, setCount] = useState(1)
  
  
	const handleFirstClick = () =>{
	  setCount(count + 1)
	}
  
	const handleSecondClick = () =>{a
	  setCount(count - 1)
	}
  
	const handleThirdClick = () =>{
	  setCount(0)
	}
  
	return (
	  <div>
		<h1>{count}</h1>
		<button onClick={handleFirstClick}>+</button>
		<button onClick={handleSecondClick}>-</button>
		<button onClick={handleThirdClick}>AC</button>
	  </div>
	)
  }
