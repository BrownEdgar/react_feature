import React , { useEffect , useState} from 'react'
import Images from './components/Images'

import './App.css'

export default function App() {
    const [images , setImages] = useState([])

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/photos?_limit=100")
        .then(response => response.json()
        .then(data =>{setImages(data)}
        ))
    }, [])

  return (
    <div>
        <Images data={images} />
    </div>
  )
}
