import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_COMMETNS,
  ADD_POSTS,
  ADD_TODOS,
  ADD_USERS,
} from "./MainInfo/Info/ActionTypes";

export default function App() {
  const { posts, comments, todos, users } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts?_limit=2").then(
      (response) =>
        dispatch({
          type: ADD_POSTS,
          payload: { posts: response.data },
        })
    );
  }, []);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/comments?_limit=2").then(
      (response) =>
        dispatch({
          type: ADD_COMMETNS,
          payload: { comments: response.data },
        })
    );
  }, []);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos?_limit=2").then(
      (response) =>
        dispatch({
          type: ADD_TODOS,
          payload: { todos: response.data },
        })
    );
  }, []);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users?_limit=2").then(
      (response) =>
        dispatch({
          type: ADD_USERS,
          payload: { users: response.data },
        })
    );
  }, []);

  return (
    <div>
      <pre className="posts">
        <h1>POSTS</h1>
        {JSON.stringify(posts, null, 2)}
      </pre>
      <pre className="comments">
        <h1>COMMENTS</h1>
        {JSON.stringify(comments, null, 2)}
      </pre>
      <pre className="todos">
        <h1>TODOS</h1>
        {JSON.stringify(todos, null, 2)}
      </pre>
      <pre className="users">
        <h1>USERS</h1>
        {JSON.stringify(users, null, 2)}
      </pre>
    </div>
  );
}
