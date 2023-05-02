import React ,{useEffect} from 'react'
import  axios  from 'axios'
import { useSelector ,useDispatch } from 'react-redux'



export default function App() {
  const {count , data , posts , person} = useSelector(state =>state)
  const dispatch = useDispatch()
  const handleClick = () =>{
    dispatch({type: 'add-count'})
  }
  const handleClick1 = () => {
    dispatch({type : 'add-element' , payload: {item: 'd'}})
  }
  
useEffect(() => {
  axios('https://jsonplaceholder.typicode.com/posts?_limit=4')
  .then(response => dispatch({
    type: "add-posts",
    payload:{
      posts: response.data
    }
  }))
}, [])

const handleClick2 = () => {
  dispatch({type : 'change-age' , payload: {age: '45'}})
}
const handleClick3 = () => {
  dispatch({type : 'find-6' })
}

  return (
    <div>
      <h1>React Redux \\ count :{count}  </h1>
      <h3> data : {JSON.stringify(data)} </h3>
      <pre>{JSON.stringify(posts,null,1)}</pre>
      <h2>person : {JSON.stringify(person)}</h2>
    <button onClick={handleClick}>add count</button>
    <button onClick={handleClick1}>add element</button>
    <button onClick={handleClick2}>change age</button>
    <button onClick={handleClick3}>find 6</button>
    </div>
    
  )
}
