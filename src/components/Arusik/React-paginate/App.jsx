import React, { useEffect, useState } from 'react'
import Todos from './Components/Todos'

import './App.css'
import axios from 'axios'

export default function App() {

    const [todos, setToDos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setToDos(data))
    }, [])
    
    // useEffect(async () => {
    //   const response =  await axios.get(
    //     "https://jsonplaceholder.typicode.com/todos"
    //   );
    //   setToDos(response.data)
    // }, [third])
    

  return (
    <div>
        <Todos data={ todos }/>
    </div>
  )
}
