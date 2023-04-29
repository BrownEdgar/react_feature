import React,{useEffect,useState} from 'react'
import Images from './components/images';

import "./App.css"

export default function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((response) => response.json())
    .then((json) => setImages(json));
  }, [])
  
  return (
    <div>
      <Images data={ images } />
    </div>
  )
}
