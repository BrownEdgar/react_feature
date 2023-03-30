import React, { useState } from 'react'
import data from "./data.json"
import Watch from './Watch/Watch';

import style from "./App.module.css"

export default function App() {
	const [watches, setwatches] = useState(data)
	return (
		<div className={style.container}>
			<h1 className={style.title}>Watches</h1>
			{watches.map((elem) => {
				return <Watch watch={elem} key={elem.id}/>
			})}
		</div>
	)
}
