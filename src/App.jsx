import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
const {count,data,posts,person} = useSelector(state => state)


const dispatch = useDispatch()
const handleClick = () => {
    dispatch({type:'add-count'})
}
const handleClick1 = ()=>{
  dispatch({type:'add-d',payload:{item:'d'}})
}
const  handleClick2 =()=>{
  dispatch({type:'change-age',payload:{age:31}})
}
const handleClick3 = ()=>{
  dispatch({type:'find-six'})
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
    <pre>
        {JSON.stringify(posts,null,1)}
      </pre>
      <h2>{JSON.stringify(person,null,1)}</h2>
      <button onClick={handleClick}>add count</button>
      <button onClick ={handleClick1}>Add 'd'</button>
      <button onClick = {handleClick2}>Change Age</button>
      <button onClick={handleClick3}>filter</button>
    </div>
  )
}

