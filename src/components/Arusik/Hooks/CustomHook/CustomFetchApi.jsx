import React, { useState, useEffect } from 'react'

export default function CustomFetchApi(url, options) {


const [data, setData] = useState(null)

useEffect(() => {
    if(options?.limit){
        fetch(`${url}?_limit=options?.limit `)
        .then(reponse => response.json())
        .then(json => setData(json))
    } else{
        fetch(url)
    .then(reponse => response.json())
    .then(json => setData(json))
    }
  
}, [])

  return (
   {data}
  )
  }
