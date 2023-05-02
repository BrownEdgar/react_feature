<<<<<<< HEAD
import React,{useState,useEffect} from 'react'
import axios from "axios"
import Posts from './Posts'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
  axios.get("http://localhost:3004/posts").then(response =>setPosts(response.data))
  }, [])
  
  return (
    <div>
      <h1>Json server</h1>
    <Posts posts={posts}/>
    </div>
  )
=======
import React, { 
	useState, 
	useEffect, 
	useCallback, 
	useMemo
} from 'react';
import axios from 'axios';
import Posts from './Posts';


export default function App() {

	const [posts, setPosts] = useState([]);
	const [count, setCount] = useState(0)
	
	async function getPosts() {
		const response = await axios.get('http://localhost:3004/posts');
		setPosts(response.data)
	}
	 const cb = useCallback(getPosts,[])

	 const PostsList = useMemo(() => {
		 return <Posts posts={posts} getPosts={cb} />
	 }, [posts, cb])

	useEffect(() => {
		getPosts()
	}, [])


	return (
		<div>
			<h1>JSON-server {count}</h1>
			<button onClick={() => setCount(count + 1)}>add</button>
			{PostsList}
		</div>
	)
>>>>>>> 1f5fcdba6cceaf2775f145f05cb98f827ee2dcf7
}
