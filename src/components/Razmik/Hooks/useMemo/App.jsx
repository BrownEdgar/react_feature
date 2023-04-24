import React,{useMemo, useState} from 'react'

export default function App() {
    const [data, setData] = useState([23,43,12,11,17,5,67,78]);
    const sortList = () =>{
        return data.sort()
    }
    const memoizedFunc = useMemo(sortList,[data])
    
  return (
    <div> {memoizedFunc.join(' | ')}</div>
  )
}
