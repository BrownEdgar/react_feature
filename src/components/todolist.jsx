
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TODO } from '../redux/features/actionTypes'

export default function Todolist() {
   const todos = useSelector(state => state.todos)
   const dispatch = useDispatch()
   const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch({
        type:ADD_TODO,
        payload:{
            message:e.target[0].value}})
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input  type = "text" placeholder='add todo text' required/>
            <input  type = 'submit' value = 'add'/>
        </form>
        <pre>{JSON.stringify(todos,null,1)}</pre>
    </div>
  )
}
