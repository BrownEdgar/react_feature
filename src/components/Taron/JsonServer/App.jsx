import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import Posts from './Posts';

import "./App.css"

export default function App() {

	const [posts, setPosts] = useState([]);

	async function getPosts() {
		const response = await axios.get('http://localhost:3004/posts');
		setPosts(response.data)
	}

	const cb = useCallback(getPosts,[])

	const PostsList = useMemo(() => {
		return <Posts posts={posts} getPosts={cb}/>
	}, [posts , cb])
	

	useEffect(() => {getPosts()}, [])

	return (
		<div>
			<h2>JSON-server</h2>
			{PostsList}
		</div>
	)
}
