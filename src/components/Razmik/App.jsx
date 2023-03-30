import React,{useState} from 'react'


export default function App() {
	
	const [count, setCount] = useState(0)

	const handleClick1 = ()=>{
		setCount(count + 1)
	}
	const handleClick2 = ()=>{
		setCount(count - 1)
	}
	const handleClick3 = ()=>{
		setCount(0)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick ={handleClick1}>+</button>
			 <button onClick={handleClick2}>-</button>
			<button onClick={handleClick3}>Remove</button>
		</div>
	)
}
