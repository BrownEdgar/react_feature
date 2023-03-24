import React,{useState} from 'react'

export default function App() {
	
	const[arr,setArr]=useState(["A","B","C"])

	const handleClick = ()=>{
		const copy = [...arr]
		copy.push("d") 
		setArr(copy)
	}
	return (
		<div>
			<h1>react Button:{JSON.stringify(arr)}</h1>
			<button onClick ={handleClick}>Click me</button>
		</div>
	)
}
