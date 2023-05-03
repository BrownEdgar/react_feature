import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
const {count,posts,data,person} = useSelector(state => state)
const dispatch = useDispatch()
const handleClick = () => {
    dispatch({type:'add-count'})
}
const handleClick1 = ()=>{
  dispatch({type:'add-angular',payload:{item:'angular'}})
}
const  handleClick2 =()=>{
  dispatch({type:'change-age',payload:{age:31}})
}
useEffect(()=>{
  axios('https://jsonplaceholder.typicode.com/posts?_limit=4')
  .then(response => dispatch({
    type:'add-posts',
    payload:{posts:response.data}}))

},[])
  return (
    <div>
      <h1>React-redux  count:{count}</h1>
      <pre>{JSON.stringify(posts,null,1)}</pre>
      <pre>{JSON.stringify(data,null,1)}</pre>
      <h2>{JSON.stringify(person,null,1)}</h2>
      <button onClick={handleClick}>add count</button>
      <button onClick = {handleClick1}>Add Angular</button>
      <button onClick = {handleClick2}>Change Age</button>
      
    </div>
  )
}

