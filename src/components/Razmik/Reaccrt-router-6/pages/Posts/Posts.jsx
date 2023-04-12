import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function Posts() {
	const [posts, setPosts] = useState([])
	useEffect(()=>{
		axios.get('https://dummyjson.com/posts')
		.then(response => setPosts(response.data.posts))

	},[])

	return (
		<div>
			<h1>Posts page</h1>
			<div>
				{posts.map((elem)=>{
					return(
						<div key = {elem.id}>
							<h2>{elem.title}</h2>
							<p>{elem.body}</p>

						</div>
					)
				})}
			</div>
		</div>
	)
}
