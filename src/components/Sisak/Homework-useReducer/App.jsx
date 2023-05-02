import React, { useReducer, useEffect } from "react";
import { initialState, reducer } from './reducer'
import axios from "axios";
import { UPLOAD_POSTS, ADD_POSTS, ADD_DEVELOPER, SORT_ARR, UPDATE_POSTS } from "./actionTypes";

import "./App.css";



export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get ('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: 10,
			}
		}).then(response => {
			dispatch({ type: 'ADD_POSTS', payload: response.data })
		})
	}, [])

  const handleInputChange = (e) => {
    const value = e.target.value;
    dispatch({ type: "ADD_DEVELOPER", payload: value });
  };

  const handleSortClick = () => {
    dispatch({ type: "SORT_ARR" });
  };

  const handleUpdatePostsClick = () => {
    dispatch({ type: "UPDATE_POSTS" });
  };
  const handleDeletePostClick = (index) => {
    dispatch({ type: "DELETE_POST", payload: index });
  };

  return (
    <div>
      <h1>Posts:</h1>
      <ul>
        {state.posts.map((post, index) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleDeletePostClick(index)}>X</button>
          </li>
        ))}
      </ul>
      <h1>Developers:</h1>
      <ul>
        {state.developers.map((developer, index) => (
          <li key={index}>{developer}</li>
        ))}
      </ul>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSortClick}>Sort Arr</button>
      <button onClick={handleUpdatePostsClick}>Update Posts</button>
      <p>Actions: {state.actions}</p>
    </div>
  )}