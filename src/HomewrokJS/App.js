import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ARR_FILTER, SUM_GENERATE , SUM_NUMBERS , FIND_NUMBER } from "./Info/MainInfo/ActionTypes";

export default function App() {
  const { arr , sum , count , amount , result } = useSelector((state) => state);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: ARR_FILTER });
  };

  const generateArr = () => {
    dispatch({ type: SUM_GENERATE})
  }

  const getSum = () => {
    dispatch({ type: SUM_NUMBERS})
  }

  const findNumber = () => {
    dispatch({ type: FIND_NUMBER})
  }

  return (
    <div>
      <h2>1. {JSON.stringify(arr , null , 2)}</h2>
      <button onClick={handleClick}>Filter</button>
      <h2>2. {JSON.stringify(sum , null , 2)}</h2>
      <button onClick={generateArr}>Generate</button>
      <h2>4. {JSON.stringify(count , null , 2)}</h2>
      <button onClick={getSum}>Count</button>
      <h2>5.{JSON.stringify(amount , null , 2)} total:{result} </h2> 
      <button onClick={findNumber}>Find</button>
      
    </div>
  );
}
