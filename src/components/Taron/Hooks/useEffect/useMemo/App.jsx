import React, { useState , useMemo } from 'react'
import Component from './Component'

export default function App() {
    const [data , setData] = useState([51,24,36,97,1,23,17,39,10])
    // const [bool , setBool] = useState(false)

    const sortList = () => {
        console.log("sorted data...")
        return data.sort()
    }
    
    const memoizedFunc = useMemo(sortList , [data])

    const memoComponent = useMemo(() => {
        return <Component />
    }, [])

    console.log("App render")
  return (
    <div>
        <h1>{memoizedFunc.join(" | ")}</h1>
        <button onClick={() => setData([...data , 42])}>Toggle data</button>
        {/* {memoComponent} */}

        <Component count={1e6}/>
        <Component count={1e9}/>
    </div>
  )
}
