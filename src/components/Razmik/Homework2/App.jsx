import React, { useState } from 'react'
import data from './data.json'
import Product from './Product/Product'
import style from "./App.module.css"

export default function App() {
	const [products, setproducts] = useState(data)
	const handleDelete = (id) => {
		const f = products.filter(product => product.id !== id);
		setproducts(f)
	}

	return (
		<div className={style.container}>
			{products.length > 0
				? (
					products.map((elem) => {
						return <Product product={elem} key={elem.id} handleDelete={handleDelete} />
					})

				)
				: <h1>Product list is empty</h1>}


		</div>)
}
