import axios from "axios";
import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";

import "./App.scss";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // որոշում ենք որ էջի վրա ենք
  const [perPage, setPerPage] = useState(10); // էջում տանսյակ-ով պոստ

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);

  const up = page * perPage;
  const down = up - perPage;
  const currentPost = posts.slice(down, up);

  const changePage = (pagecount) => {
    setPage(pagecount);
  };

  return (
    <div className="App">
      <Posts currentPost={currentPost} />
      <Pagination
        totalPosts={posts.length}
        perPage={perPage}
        changePage={changePage}
      />
    </div>
  );
}
