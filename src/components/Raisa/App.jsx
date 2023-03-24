import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const addClick = () => {
    setCount(count + 1);
  };

  const subtractClick = () => {
    setCount(count - 1);
  };

  const nullClick = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addClick}>To Add</button>
      <button onClick={subtractClick}>To Subtract</button>
      <button onClick={nullClick}>To Null</button>
    </div>
  );
}
