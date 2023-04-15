import React, {useState, useEffect} from 'react'
import axios from 'axios'

import "./Posts.scss"
import { Link } from 'react-router-dom'

export default function Posts() {
	const [posts , setPosts] = useState([])
	
	useEffect(() =>{
		axios.get('https://dummyjson.com/posts')
		.then(response => setPosts(response.data.posts))
	}, [])

	return (
		<div>
			<h1>Posts page</h1>
			<div className='Post'>
				{posts.map((elem) => {
					return (
						<Link key={elem.id} className='Post-item' to={`${elem.id}`}>
							<h2 className='Post-title'>{elem.title}</h2>
							<p className='Post.body'>{elem.body}</p>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
