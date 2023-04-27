import React, { useState, useEffect} from 'react'


export default function CustomFetch(url, options) {
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

  return { data }
  
}
