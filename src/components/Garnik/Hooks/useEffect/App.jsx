import React, { useState, useEffect} from "react"
const API_KEY = process.env.REACT_APP_API_KEY

export default function App() {
	const [value, setValue] = useState([])

	const [isLoading, setIsLoading] = useState(false)
	useEffect(() =>{
		async function getData() {
		setIsLoading(true)
	const response = await	fetch(`${API_KEY}/posts`)
	const data = await response.json()
	setIsLoading(false)
	setValue(data)
}
getData()
}, [])

	return(
		<div>
			<h1>useEffect</h1>
       {isLoading 
			 ? <h2>loading...</h2> 
			 : <pre>value...{JSON.stringify(value,null,1)}</pre>}
			<button>add</button>
		</div>
	)
}