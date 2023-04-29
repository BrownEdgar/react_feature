import React , { useEffect , useState} from 'react'
import Albums from './components/Albums'

import './App.css'

export default function App() {
    const [albums , setAlbums] = useState([])

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json()
        .then(data =>{setAlbums(data)}
        ))
    }, [])

  return (
    <div>
        <Albums data={albums} />
    </div>
  )
}
