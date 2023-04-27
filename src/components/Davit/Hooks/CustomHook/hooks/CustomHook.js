import {
    useState
} from 'react'

export default function CustomHook(initiailState) {
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
        const coppy = value.slice()
        const del = coppy.filter((obj) =>
            obj.id !== id);
        coppy.splice(del, 1);
        return coppy;
    }
    const addTodo = () => {
        setValue([...value, {
            "userId": 1,
            "id": 18,
            "title": "nor title",
            "completed": false
        }])
    }

    return [value, {
        alldone,
        removeById,
        addTodo
    }]
}