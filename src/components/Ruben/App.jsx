import React from 'react'


export default function App() {
	const [count,setCount] = useState(0)
	const handleClickPlus =() =>{
		setCount(count +1)
	}
	const handleClickMinus =() =>{
		setCount(count -1)
	}
	const handleClickReset =() =>{
		setCount(0)
	}
	return (
	 <div>
	  <h1>Number: {count}</h1>
		<button onClick={handleClickPlus}>Plus</button>
		<button onClick={handleClickMinus}>Minus</button>
		<button onClick={handleClickReset}>Reset</button>
	 </div>
	)
}

