import React from 'react'
import CustomHook from './hooks/CustomeHook'
import CustomFetch from './hooks/CustomFetch'

export default function App() {
const [arr, {sorted, add, check } ] = CustomHook([21,221,23,123,35,45,567])

    const {data} = CustomFetch("https://jsonplaceholder.typicode.com/posts", {
        limit: 2,
    })


  return (
    <div>
        <h1>
            <pre>{JSON.stringify(data,null,1)}</pre>
        </h1>
        <h1>{arr.join(',')}</h1>
        <button onClick={sorted}>sorted</button>
        <button onClick={() => add(22)}>add 22</button>
        <button onClick={() => check(30)}>check</button>
    </div>
  )
}
