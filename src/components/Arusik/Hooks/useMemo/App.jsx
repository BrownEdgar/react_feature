import React, { Component, useMemo } from 'react'
import { useState } from 'react'
import Components from './Components'

export default function App() {
    const [data, setData] = useState([51,54,16,98,32,65,47])
    const [bool, setBool] = useState(false)

    const sortList = () =>{
        console.log('sorted data')
        return data.sort()
    }
    const memoizedFunc = useMemo(sortList, [data])

    const MemoComponent = useMemo(() => {
        return <Components />
    })

  return (
    <div>
        <h1>{memoizedFunc.join("|")}</h1>
        <button onClick={() => setData([...data, 42])}>toggle data</button>
        {/* {MemoComponent} */}
        {/* memo */}
        {/* <Components /> */}
        <Components />

    </div>
  )
}