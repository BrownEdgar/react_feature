import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ARR_FILTER } from "./Info/MainInfo/ActionTypes";

export default function App() {
  const { arr } = useSelector((state) => state);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: ARR_FILTER });
  };

  return (
    <div>
      <h2>{JSON.stringify(arr)}</h2>
      <button onClick={handleClick}>Filter</button>
    </div>
  );
}
