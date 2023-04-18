import React, { useReducer, useEffect, useState } from 'react'
import { initialState, reducer } from './reducer'
import axios from 'axios';
import { GET_POSTS, ADD_DEV_NAME, SORT_ARR, CHANGE_ID, DELETE_POST } from './actionTypes'

import "./App.css"

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");
  

  const updateState = (type, payload) => {
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
        case CHANGE_ID:
          dispatch({type: CHANGE_ID, playload: "a"})

      default:
        break;
    }
  }
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }


  return (
    <div>
      {/* <h1>state : {initialState}</h1> */}
			<pre>state: {JSON.stringify(state, null, 1)}</pre>
      <button onClick={() => {updateState(GET_POSTS)}} >GET_POSTS</button>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={() => {updateState(ADD_DEV_NAME)}} >ADD_DEV_NAME</button>
      <button onClick={() => {updateState(SORT_ARR)}} >SORT_ARR</button>
      <button onClick={() => {updateState(CHANGE_ID)}} >CHANGE_ID</button>
      <button onClick={() => {updateState(DELETE_POST)}} >DELETE_POST</button>
      

		</div>
  )
}
