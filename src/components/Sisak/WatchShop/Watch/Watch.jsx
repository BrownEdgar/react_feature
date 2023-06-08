import React from 'react'
import '../Images/Armani1.jpg'

import style from "./Watch.module.css"

export default function Watch({ watch, handleDelete }) {
	return (
		<div className={style.watch}>
			<span className={style.btn_delete} onClick={() => handleDelete(watch.id)}>X</span>
			<img src={watch.image} alt={`watch-${watch.id}`} />
			<h3 className={style.title}>{watch.title}</h3>
			<h3 className={style.price}>{watch.price}</h3>
			<p>{watch.description}</p>
		</div>
	)
}
