import React, { useState,useEffect} from 'react' 
import Posts from './Posts/Posts'


const API_KEY = process.env.REACT_APP_API_KEY
export default function App() {
   
    const [value, setValue] = useState([])

	useEffect(() => {
		async function getData() {
		
			const response = await fetch(`${API_KEY}/posts`)
			const data = await response.json();
			
			setValue(data)
		}
		getData()

	}, [])

	return (
		<div>
            <Posts  posts={value}/>
        </div>
	)
}

