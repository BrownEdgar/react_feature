import React from 'react'
import CustomHook from './hooks/CustomHook'
import chJson from './CustomHook.json';

import "./App.css"

export default function App() {
const [arr,{alldone ,removeById ,addTodo}] = CustomHook(chJson)

  return(
    <div className='box'>
      <pre>{JSON.stringify(arr,null,1)}</pre>
      <div className="buttons">
      <button onClick={alldone}>alldone</button>
      <button onClick={() => removeById(5)}>removeById</button>
      <button onClick={addTodo}>addTodo</button>
      </div>
    </div>
  )

}