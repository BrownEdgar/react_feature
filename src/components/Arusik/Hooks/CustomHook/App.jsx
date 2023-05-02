import React, { useState, useEffect } from 'react'

import CustomHook from './hooks/CustomHook'
import CustomFetchApi from './hooks/CustomFetchApi'

export default function App() {

    const [arr, {sorted, add, check} ]  = CustomHook([21,15,54,78,26,156,216,112])

    const { data } = CustomFetchApi("https://jsonplaceholder.typicode.com/posts")
  return (
    <div>
        <h1>
            <pre>{JSON.stringify(data,null,1)}</pre>
        </h1>
        <h1>{arr.join(' | ')}</h1>
        <button onClick={sorted}>sorted</button>
        <button onClick={() => add(157)}>Add number</button>
        <button onClick={() => check(60)}>Check</button>

    </div>
  )
}
