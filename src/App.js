import React from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Todos from "./components/Todos";

export default function App() {
  return (
    <div>
      <Posts />
      <Users />
      <Todos />
    </div>
  );
}
