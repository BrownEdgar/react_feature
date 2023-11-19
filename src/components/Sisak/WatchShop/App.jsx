import React, { useState } from 'react'
import data from "./data.json"
import Watch from './Watch/Watch';

import style from "./App.module.css"

export default function App() {
	const [watches, setWatches] = useState(data);
	const handleDelete = (id) => {
		const f = watches.filter(watch => watch.id !== id);
		setWatches(f)
	 }
	 
	 return (
		<div className={style.container}>

			{watches.length > 0
			? (
				watches.map((elem) => {
				return <Watch watch={elem} key={elem.id} handleDelete={handleDelete}/>
			}))
		  : <h1>You are delete all</h1>}
		</div>
	)
}
