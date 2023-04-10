import axios from 'axios'
import React, {useState , useEffect } from 'react'

export default function App() {
  const [data, setData] = useState()

  useEffect(() =>{
    function getData(){
      axios("https://jsonplaceholder.typicode.com/users")
      .then(response => setData(response.data))
    }
    getData()
  } , [])

  return (
    <div>
        {JSON.stringify(data,null,2)}
    </div>
  )
}