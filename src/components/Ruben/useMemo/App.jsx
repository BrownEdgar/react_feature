import { useState, useMemo } from "react"


export default function App() {
    const [data, setData] = useState([51,23,23,2321,123,123])
    const [bool, setBool] = useState(false)
  return (
    const sortList = () => {
        console.log('sorted data...')
        return data.sort()
    }
   const memoizedFunc = useMemo(() => sortList, [])
   console.log(memoizedFunc)
  )
    return(
    <div>
    <h1> {memoizedFunc.join(' | ')}</h1>
    <button onClick={() => setBool(!bool)}>toggle data</button>
    </div>
    )
}
