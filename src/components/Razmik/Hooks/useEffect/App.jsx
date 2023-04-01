import React,{useEffect, useState} from 'react'
const API_KEY = process.env.REACT_APP_API_KEY
export default function App() {
    const [value, setValue] = useState(0)
    const[isLoading,setIsLoading] = useState(false) 
   
    useEffect(()=>{
       async function getData(){
         setIsLoading(true)
         const response = await fetch(`${API_KEY}/posts`)
         const data = await response.json();
         setIsLoading(false)
         setValue(data)
       }
       getData()
    },[])
  return (
    <div>
        {isLoading
        ?<h2>Loading ...</h2>:<pre>Value 
        : {JSON.stringify(value, null, 1)}</pre>}
    </div>
  )
}
