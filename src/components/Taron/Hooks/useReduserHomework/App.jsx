import {GET_POSTS,ADD_DEV_NAME,SORT_ARR,CHANGE_ID,DELETE_POST} from './actionTypes'
import {initialState , reducer} from './reducer'
import axios from 'axios';
import React, { useReducer , useState } from 'react'
import "./App.scss"

export default function App() {
  const [state , dispatch] = useReducer(reducer , initialState)
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {setInputValue(e.target.value)}
  const updateState = (type) => {
    switch (type){
      case GET_POSTS:
        axios.get('https://jsonplaceholder.typicode.com/todos', {
			  params: {
				_limit: 10,
			  }
		    }).then(response => {
			  dispatch({ type: GET_POSTS, payload: { posts: response.data } })
		    })
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
    }
  }


  return (
    <div>
        <pre>state:{JSON.stringify(state , null , 1)}</pre>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={() => updateState(GET_POSTS)}>GET POSTS</button>
        <button onClick={() => {updateState(ADD_DEV_NAME)}}>ADD NAME</button>
        <button onClick={() => updateState(SORT_ARR)}>SORT ARR</button>
        {/* <ul>
          {state.posts.map((post,index) => {
            return (
              <li key={index}>
                {post.id}
                <span>
                  {post.title}
                </span>
                <span onClick={() => dispatch({type.DELETE_POST})}>x</span>
              </li>
            )
          })}
        </ul> */}
    </div>
  )
}