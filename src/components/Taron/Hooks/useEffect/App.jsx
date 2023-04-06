import React, { useEffect, useState } from 'react'
import Posts from './Posts/Posts';
import "./App.scss"
const API_KEY = process.env.REACT_APP_API_KEY;


export default function App() {
    const[value, setValue] = useState([]);
    const [isLoading , setIsLoading] = useState(false)

    
    useEffect(() =>{
       async function getData(){
        setIsLoading(true)
        
        const response = await fetch(`${API_KEY}/posts?_limit=10`)
        const data = await response.json()
        setIsLoading(false)
        setValue(data)

        // fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
        // .then(response => response.json())
        // .then(json => setValue(json));
    }
        getData()

        // console.log("useEffect run! count change")
        // setValue(1)
    }, [])

  return (
    <div className='container'> 
        <Posts posts={value}/>


        {/* <h1>useEffect hook</h1>
        {isLoading 
        ? <h2>loading...</h2> 
        : <pre>Value: {JSON.stringify(value , null , 1)}</pre>}
        <button>Add</button> */}
        {/* <pre>Value: {JSON.stringify(value , null , 1)}</pre> */}
    </div>
  )
}
