import { useState } from 'react'

export default function CustomHook(initialstate) {
	const [value, setValue] = useState(initialstate)

	const alldone = () => {
		const x = value.map(elem => {
			if (!elem.completed) {
				elem.completed = true
			}
			return elem
		})
		setValue(x)
	}

	const removeById = (num) => {

		const copy = [...value]
		copy.forEach((elem, i) => {
			if (elem.id === num)
				copy.splice(i, 1)
		});
		setValue(copy)
	}

	const addTodo = () => {
		const addNewTodo = {
			"userId": 1,
			"id": 3,
			"title": "lorem ipsum dolor sit amet consectetur",
			"completed": false
		}
		setValue([...value, addNewTodo])
	}

	return [value, { alldone, removeById, addTodo }]

}
