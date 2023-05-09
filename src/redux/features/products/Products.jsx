import React from 'react'
import { addProductsAsync } from './productsSlice'
import { useSelector, useDispatch } from 'react-redux'
export default function Products() {
	const products = useSelector(state=> state.products);
	const dispatch = useDispatch();
	
	const getProduct = () => { 
		dispatch(addProductsAsync(process.env.REACT_APP_API_KEY))
	 }
	return (
		<div>
			<button onClick={getProduct}>get products</button>
			<pre>
				{JSON.stringify(products,null,1)}
			</pre>
		</div>
	)
}
