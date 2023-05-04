import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_ANGULAR, ADD_COUNT, ADD_POSTS, CHANGE_AGE, CHANGE_COUNT } from './redux/features/actionTypes'
import Todolist from './components/todolist'

export default function App() {
const {count,posts,data,person} = useSelector(state => state)
const dispatch = useDispatch()
const handleClick = () => {
    dispatch({type:CHANGE_COUNT})
}
const handleClick1 = ()=>{
  dispatch({type:ADD_ANGULAR,payload:{item:'angular'}})
}
const  handleClick2 =()=>{
  dispatch({type:CHANGE_AGE,payload:{age:31}})
}
useEffect(()=>{
  axios('https://jsonplaceholder.typicode.com/posts?_limit=4')
  .then(response => dispatch({
    type:ADD_POSTS,
    payload:{posts:response.data}}))

},[])
  return (
    <div>
      <h1>React-redux  count:{count}</h1>
      <pre>{JSON.stringify(posts,null,1)}</pre>
      <pre>{JSON.stringify(data,null,1)}</pre>
      <h2>{JSON.stringify(person,null,1)}</h2>
      <button onClick={handleClick}>change count</button>
      <button onClick = {handleClick1}>Add Angular</button>
      <button onClick = {handleClick2}>Change Age</button>
      <Todolist/>
      
    </div>
  )
}

