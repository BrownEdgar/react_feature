import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { ADD_TODO } from '../redux/features/actionTypes'

export default function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type: ADD_TODO , payload: {
            message: e.target[0].value
        }})
        e.target[0].value = ""
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='add totdo text' required />
            <input type="submit" value='add' />
        </form>
        <pre>
            {JSON.stringify(todos , null , 2)}
        </pre>
    </div>
  )
}
