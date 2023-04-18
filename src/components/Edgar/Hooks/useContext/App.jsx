import React, { useState } from 'react'
import Component from './Component'

export const MyContext = React.createContext()

export default function App() {
	const [value, setValue] = useState([1,2,3,4,5,6])

	return (
		<div>
			<h2>App</h2>
			<MyContext.Provider >
				<Component />
			</MyContext.Provider>
		</div>
	)
}
