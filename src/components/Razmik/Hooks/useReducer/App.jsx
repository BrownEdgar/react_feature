import React, { useEffect, useReducer, useState } from 'react'
import { initialState, reducer } from './reducer';
import axios from 'axios';
import ACTIONS from './actionTypes';


import './App.scss'

export default function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [name, setName] = useState('')
  const [change, setChange] = useState(false)
  useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10',
          ).then(response =>{dispatch({type:ACTIONS.UPLOAD_POSTS,payload:{posts:response.data}})
           })
  },[])
  const handleChange = (e)=>{
      setName(e.target.value)
  }
  const handleClick = ()=>{
     dispatch({type:ACTIONS.SORT_ARR});
     setChange(true)
  }
  const handleClick1 = ()=>{
    dispatch({type:ACTIONS.ADD_NAME,payload:{name:name}});
  }
  const handleDelete = (id) =>{
  dispatch({type:ACTIONS.DELETE_POST,payload:{userId:id}})
  }
  const handleClick2 = ()=>{
    dispatch({type:ACTIONS.CHANGE_POSTS});
 }

return (
    <div className='container'>
        <button className='Click' onClick={handleClick}>Sort</button>
        <div className='Sort'>
          <input onChange={handleChange} name = "name" type='text'/>
          <button className='Click' onClick={handleClick1}>ADD</button>
        </div> 
        <button 
          className='Click' 
          onClick={handleClick2}
          disabled={!change}>Change Posts</button>
        <h1>Actions:{state.actions}</h1>
        <h1>{JSON.stringify(state.arr,null,1)}</h1>
        <h1>{JSON.stringify(state.developers,null,1)}</h1>
        <div className='Post'>
          {state.posts.map((elem)=>{
            return(
              <div key = {elem.id} className='Post-item' >
                <h2 className='Post-title'>{elem.id}:{elem.title}</h2>
                <p className='Post-body'>{elem.body}</p> 
                <button className='Post-delete' onClick={()=>{handleDelete(elem.id)}}>Delete</button>
              </div>
            )
          })}
        </div>
    </div>
  )
}
