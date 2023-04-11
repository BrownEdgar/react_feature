import React, {useState, useEffect} from 'react'

export default function App() {
    const [data, setData] = useState([])

    useEffect(() =>{
        function getData() {
            axios('https://jsonplaceholder.typicode.com')
            .then(response => console.log(response))
        }
        getData()
    },[])
  return (
    <div>

    </div>
  )
}
