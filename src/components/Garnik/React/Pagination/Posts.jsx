import React from 'react'
import './Posts.css'
export default function Posts({ currentPosts, total, perPage, handleClick }) {

	const links = []
	for (let i = 1; i <= Math.floor(total / perPage); i++) {
		links.push(i)
		
	}

	return (
	
	<div>
		<ul className='Post'>
			{currentPosts.map(elem => {
				return <li key={elem.id}>{elem.title}</li>
			})}
		</ul>

			<li className='Pagination'>
				{links.map((link, index) => {
					return <li key={index}>
						<a href="#!">
							{link}
						</a>
					</li>
				})}
			</li>
	</div>
	)
}

