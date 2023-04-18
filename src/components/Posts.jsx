import axios from 'axios';
import React, { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../reducer';


export default function Posts() {
const [products, dispatch] = useReducer(reducer,	initialState)

	useEffect(() => {
			axios({
				url: 'https://dummyjson.com/products',
				method: 'get'
			}).then(response => dispatch({ 
				type: 'add-products', 
				payload: { products: response.data.products}}
			))

	}, [])
	
	const addToBasket = (product) => { 
		const products = JSON.parse(localStorage.getItem("products")) || [];
		const isExist = products.some(elem => elem.id === product.id)
		if (!isExist) {
			products.push(product);
		}
		localStorage.setItem("products", JSON.stringify(products))
	}

	return (
		<div className='wrapper'>
			{products.map((product) => {
					return (
						<article key={product.id} className='Posts-Item'>
							<span id='currentId'>{product.id}</span>
							<h2>{product.title}</h2>
							<p>{product.price}</p>
							<button onClick={() => addToBasket(product)}>Add to basket</button>
						</article>
				)
				})}
		</div>
	)
}
