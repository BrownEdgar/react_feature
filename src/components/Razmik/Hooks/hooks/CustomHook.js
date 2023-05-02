import axios from 'axios';
import {useState,useEffect} from 'react'

export default function CustomHook(initialState) {
    const [value, setValue] = useState(initialState)
    const [todo, setTodo] = useState()
    const [todoId, setTodoId] = useState(6)
    
    useEffect(() => {
		  getTodo()
	  }, [todoId])
    
    async function getTodo() {
      const response = await axios(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
		  setTodo(response.data)
    }
    const addTodo = ()=>{
        const copy = value.slice()
        copy.push(todo)
        setValue(copy)
        setTodoId(todoId+1)
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
