import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';

import "./App.css"

export default function App() {

	const [posts, setPosts] = useState([]);

	async function getPosts() {
		const response = await axios.get('http://localhost:3004/posts');
		setPosts(response.data)
	}
	useEffect(() => {
		getPosts()
	}, [])


	return (
		<div>
			<h1>JSON-server</h1>
			<Posts posts={posts} getPosts={getPosts}/>
		</div>
	)
}
