import React, { useState } from 'react'
import Child from './Child'

export default function App() {
	const [value, setValue] = useState([{id:1, name: "react.js"}])

	return (
		<div>
			<Child name={"child"} age= {25} handleClick={() => console.log("ok")}
				value={value} bool={true}/>
		</div>
	)
}
