import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_POSTS } from "../redux/features/actionTypes";
import axios from "axios";

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=2")
      .then((response) =>
        dispatch({
          type: GET_POSTS,
          payload: {
            posts: response.data,
          },
        })
      );
  }, []);

  return (
    <div>
      <h1>POSTS</h1>
      <pre>{JSON.stringify(posts, null, 1)}</pre>
    </div>
  );
}
