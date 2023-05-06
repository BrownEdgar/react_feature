import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_TODOS } from "../redux/features/actionTypes";
import axios from "axios";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_todos=2")
      .then((response) =>
        dispatch({
          type: GET_TODOS,
          payload: {
            todos: response.data,
          },
        })
      );
  }, []);

  return (
    <div>
      <h1>TODOS</h1>
      <pre>{JSON.stringify(todos, null, 1)}</pre>
    </div>
  );
}
