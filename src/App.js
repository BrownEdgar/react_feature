import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const { count, data, posts, person, info } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: "add-count" });
  };

  const addLetter = () => {
    dispatch({ type: "add-letter", payload: { item: "d" } });
  };

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts?_limit=4").then(
      (response) =>
        dispatch({
          type: "add-posts",
          payload: { posts: response.data },
        })
    );
  }, []);

  const addAge = () => {
    dispatch({ type: "add-age" });
  };

  const findNumber = () => {
    dispatch({ type: "find-number" });
  };

  return (
    <div>
      <h1>Hello Redux | count: {count}</h1>
      <h2>{JSON.stringify(data)}</h2>
      <h2>{JSON.stringify(person)}</h2>
      <pre className="info">{JSON.stringify(info, null, 2)}</pre>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
      <button onClick={handleClick}>Add Count</button>
      <button onClick={addLetter}>Add Letter</button>
      <button onClick={addAge}>Add Age</button>
      <button onClick={findNumber}>Find number</button>
    </div>
  );
}
