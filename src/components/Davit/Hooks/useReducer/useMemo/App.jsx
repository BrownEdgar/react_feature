import React , {useState ,useMemo} from 'react'

export default function App() {
    const [data, setData] = useState([46,85,16,15,24,41])
    const sortList =()=>{
      return data.sort()
    }
    const memoizedFunc = useMemo(sortList,[])
    return (
    <div>
        <h1>{memoizedFunc.join(" | ")}</h1>
    </div>
  )
}
