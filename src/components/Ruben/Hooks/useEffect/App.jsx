import React, { useState, useEffect } from "react";
import Posts from './Posts/Posts';

import './App.scss'

const API_URL = process.env.REACT_APP_API_URL
export default function App() {
    const [value, setValue] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

console.log(process.env.REACT_APP_API_URL)
   useEffect(() => {
    async  function getData() {
    setIsLoading(true)
    const response = await  fetch(`${API_URL}/posts`) //?_limit=100000
    const data = await response.json();
    setIsLoading(false)
    setValue(data)
      }
      getData()
   }, [])

    return (
        <div className="container">
            <Posts posts={value}/>



            {/* <h1>useEffect hook</h1>
            {isLoading ? <h2>Loading...</h2> :   <pre>value: {JSON.stringify(value,null,1)}</pre>}
            <button>add</button> */}
        </div>
    )
}










// useEffect(() => {
//     async  function getData() {
//     const respons = await  fetch('https://jsonplaceholder.typicode.com/')
//     const data = await respons.JSON();
//     setValue(data)
//       .then(response => response.json())  
//    .then(json => setValue(json))
//       }
//       getData()
//    }, [])