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
}
