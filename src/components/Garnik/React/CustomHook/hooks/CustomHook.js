import React, {useState} from 'react'

export default function CustomHook(initialState) {
	const [value, setValue] = useState(initialState)
	const sorted = () => {
		
		const sort = value.sort((a,b) => a - b)
		setValue([...sort])
	}

	return [arr, { sorted, add, removeByIndex, toJson }]

	
}
