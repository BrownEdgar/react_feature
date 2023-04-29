import {
    useState
} from 'react'

export default function CustomHook(initiailState = []) {
    const [value, setValue] = useState(initiailState)
    const alldone = () => {
        const coppy = value.slice()
        const done = coppy.map(elem => {
            elem["completed"] = true
            return elem
        })
        setValue(done)
    }

    function removeById(id) {
     
			const coppy = value.filter((obj) => obj.id !== id);
			setValue(coppy)
    }
    const addTodo = () => {
			const data = {
				"userId": 1,
				"id": 18,
				"title": "nor title",
				"completed": false
			}
        setValue([...value, data ])
    }

    return [value, {
        alldone,
        removeById,
        addTodo
    }]
}