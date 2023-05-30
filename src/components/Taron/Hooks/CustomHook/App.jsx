import React from 'react'
import CustomHook from './hooks/CustomHook'
import CustomFetchApi from './hooks/CustomFetchApi'

export default function App() {
    const [arr , {sorted , add , check} ] = CustomHook([21,78,6,45,32,81,92,14])

    const {data} = CustomFetchApi("https://jsonplaceholder.typicode.com/users", {
        limit: 5,
    })

  return (
    <div>
        <h1>{arr.join(" | ")}</h1>
        <h2>
            <pre>{JSON.stringify(data,null,1)}</pre>
        </h2>
        <button onClick={sorted}>SORTED</button>
        <button onClick={() => add(100)}>ADD</button>
        <button onClick={() => check(25)}>CHECK</button>
    </div>
  )
}

