import React from 'react'

import style from "./Watch.module.css"

export default function Watch({ watch, handleDelete }) {
	return (
		<div className={style.watch}>
			<span className={style.btn_delete} onClick={() => handleDelete(product.id)}>X</span>
			<img src={watch.image} alt={`watch-${watch.id}`} />
			<h3 className={style.title}>{watch.title}</h3>
			<h3 className={style.price}>{watch.price}</h3>
			<p>{watch.description}</p>
		</div>
	)
}
