import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_AGE, ADD_COUNT, ADD_LETER, ADD_POSTS, FIND_NUMBER } from "./redux/features/actionTypes";
import TodoList from "./components/TodoList";

export default function App() {
  const { count, data, posts, person, info } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: ADD_COUNT });
  };

  const addLetter = () => {
    dispatch({ type: ADD_LETER, payload: { item: "d" } });
  };

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts?_limit=4").then(
      (response) =>
        dispatch({
          type: ADD_POSTS,
          payload: { posts: response.data },
        })
    );
  }, []);

  const addAge = () => {
    dispatch({ type: ADD_AGE });
  };

  const findNumber = () => {
    dispatch({ type: FIND_NUMBER });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>{JSON.stringify(data)}</h2>
      <h2>{JSON.stringify(person)}</h2>
      <pre className="info">{JSON.stringify(info, null, 2)}</pre>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <TodoList />
      <button onClick={handleClick}>Add Count</button>
      <button onClick={addLetter}>Add Letter</button>
      <button onClick={addAge}>Add Age</button>
      <button onClick={findNumber}>Find number</button>
    </div>
  );
}
