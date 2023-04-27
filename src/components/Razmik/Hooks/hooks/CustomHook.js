import axios from 'axios';
import {useState,useEffect} from 'react'

export default function CustomHook(initialState) {
    const [value, setValue] = useState(initialState)
    const [todo, setTodo] = useState()
    useEffect(() => {
		getTodo()
	}, [value])
    async function getTodo() {
        const randomId = Math.floor(Math.random()*(200-6)+6)
		const response = await axios(`https://jsonplaceholder.typicode.com/todos/${randomId}`)
		setTodo(response.data)
    }
    const addTodo = ()=>{
        const copy = value.slice()
        copy.push(todo)
        setValue(copy)
    }
    const removeById = (id) =>{
        const f = value.filter(todo => todo.id !== id);
		setValue(f)
    }
    const alldone = ()=>{
        value.forEach((todo) =>{
            if(todo.completed === false){
              todo.completed = true
            }
        })
      setValue([...value])
    }
    
    
return [value,{removeById,addTodo,alldone}]
  
   
}
