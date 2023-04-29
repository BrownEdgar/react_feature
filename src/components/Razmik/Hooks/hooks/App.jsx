import React from 'react'
import CustomHook from './CustomHook';

import './App.scss'

export default function App() {
  const [todos,{removeById,addTodo,alldone}] = CustomHook([{
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
      },
      {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
      }])
    

  return (
    <div className='container'>
        <button onClick={()=>removeById(1)}>RemoveById</button>
        <button onClick={addTodo}>AddTddo</button>
        <button onClick={alldone}>Alldone</button>
        <pre>{JSON.stringify(todos,null,1)}</pre>
    </div>
  )
}
