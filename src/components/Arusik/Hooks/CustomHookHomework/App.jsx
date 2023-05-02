import React , { useEffect, useState } from 'react'
import CustomHook from './hooks/CustomHook'


export default function App() {

  const [todos, setTodos] = useState([])
    const [arr, { AddDone , RemoveById , AddToDo}] = CustomHook([
        {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      }])

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => setTodos(data))
          .catch(error => console.error(error));
      }, []);

  return (
    <div>
        {/* <ul>
        {arr.map((obj) => (
          <li key={obj.id}>
            <p>Id: {obj.id}</p>
            <p>Title: {obj.title}</p>
            <p>Completed: {obj.completed}</p>
          </li>
        ))}
      </ul> */}
      <pre>{JSON.stringify(arr, null, 2)}</pre>
      <button onClick={AddDone}>All Done</button>
      <button onClick={() => RemoveById(4)}>Remove By ID</button>
      <button onClick={AddToDo}>Add To Do</button>

    </div>
  )
}
