import React, { useState, useEffect } from 'react';


export default function Posts() {
	const [data, setData] = useState([])
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => setData(json))
	}, [])
	
	return (
		<div>
			<ul>
				{data.map((elem,index) => {
					return (
						<li key={elem.id}>
							{elem.title}
						</li>
				)
				})}
			</ul>
		</div>
	)
}
