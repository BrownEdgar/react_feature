import React, { useState } from 'react'

export default function Basket() {
	const [data, setData] = useState(JSON.parse(localStorage.getItem("products")) || [])
	return (
		<div className='wrapper'>
			{data.map((product) => {
				return (
					<article key={product.id} className='Posts-Item'>
						<span id='currentId'>{product.id}</span>
						<h2>{product.title}</h2>
						<p>{product.price}</p>
						
					</article>
				)
			})}
		</div>
	)
}
