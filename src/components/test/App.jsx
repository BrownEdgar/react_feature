import React,{useEffect,useState} from 'react'
import Posts from './Posts'
const API_KEY = process.env.REACT_APP_API_KEY

export default function App() {
	const [data, setdata] = useState([])
	useEffect(() => {
		fetch(`${API_KEY}/posts`)
			.then(response => response.json())
			.then(json => setdata(json))
	}, [])
	
	
	
	return (
		<div>
			<Posts posts={data} />
			
	
		</div>
	)
}
