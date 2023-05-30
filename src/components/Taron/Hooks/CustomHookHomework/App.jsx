import React from 'react'
import CustomHook from './hooks/AllDone.js'

export default function App() {
  const [data , { alldone , removeById , addTodo }]  = CustomHook([
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
    }
]);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={alldone}>ALL DONE</button>
      <button onClick={() => removeById(2)}>REMOVE</button>
      <button onClick={addTodo}>ADD TODO</button>
    </div>
  );
}
