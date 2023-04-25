import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './Posts'



export default function App() {

	const [posts, setPosts] = useState([])

	useEffect(() => {
		axios.get("http://localhost:3004/posts")
		.then(response => setPosts(response.data))
	}, [])
	

	return (
		<div>
			<h1>Json-server</h1>
			<Posts posts={posts}/>
		</div>
	)
}
