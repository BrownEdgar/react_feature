import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_AGE, CHANGE_COUNT } from "./redux/features/actionTypes";
import Todolist from "./components/Todolist";

export default function App() {
  const count = useSelector(state => state.count)

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: CHANGE_COUNT });
  };

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleClick}>change count</button>
      <Todolist />
    </div>
  );
}