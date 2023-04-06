import React from 'react'

import "./Posts.scss"

export default function Posts({ posts }) {
	return (
		<div className='Posts'>
				{posts.map(post => {
					return (
						<div className='Posts__Item' key={post.id}>
							<h2 className='Posts__Title'>{post.title}</h2>
							<p className='Posts__Body'>{post.body}</p>
						</div>
					)
				})}
		</div>
	)
}