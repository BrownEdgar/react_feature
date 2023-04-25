import React, { useReducer, useEffect, useState } from 'react'
import { initialState, reducer } from './reducer'
import axios from 'axios';
import { GET_POSTS, ADD_DEV_NAME, SORT_ARR, CHANGE_ID, DELETE_POST } from './actionTypes'

import "./App.css"

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");
  

  const updateState = (type) => {
    switch (type) {
      case GET_POSTS:
        axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: 10,
          }
        }).then(response => {
          dispatch({ type: GET_POSTS, payload: { posts: response.data } })
        });
        break;
      case ADD_DEV_NAME:
        dispatch({type: ADD_DEV_NAME, payload: inputValue});
        break;
      case SORT_ARR:
        dispatch({type: SORT_ARR})
        break;
        case CHANGE_ID:
          dispatch({type: CHANGE_ID})
        break;


      default:
        break;
    }
  }
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }


  return (
    <div>
      {/* <h1>state : {initialState}</h1> */ } 
      {/* 2comments բացելուց հետո մյուս button-ներ կաշխատեն css-ի խնդիր կա սիրուն երևալու */}
			{/* <pre>state: {JSON.stringify(state, null, 1)}</pre> */}
      <button onClick={() => {updateState(GET_POSTS)}} >GET_POSTS</button>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={() => {updateState(ADD_DEV_NAME)}} >ADD_DEV_NAME</button>
      <button onClick={() => {updateState(SORT_ARR)}} >SORT_ARR</button>
      <button onClick={() => {updateState(CHANGE_ID)}} >CHANGE_ID</button>
        <ul>
          {
            state.posts.map((post,index) => {
              return(
                <li key={index}>
                  {post.id}
                  <span>
                    {post.title}
                  </span>
                  <span onClick={() => dispatch({type:DELETE_POST,payload: {id: post.id}})}>X</span>
                </li>
              )
            })
          }
        </ul>

		</div>
  )
}
