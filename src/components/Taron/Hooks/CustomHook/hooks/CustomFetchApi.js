import { useState , useEffect} from 'react'

export default function CustomFetchApi(url , options) {

    const [data, setData] = useState(null)

    useEffect(() => {
        if (options?.limit) {
            fetch(`${url}?_limit=${options.limit}`)
        .then(response => response.json())
        .then(json => setData(json))
        }else{
            fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
        }
    }, [])
    
  return {data}
}