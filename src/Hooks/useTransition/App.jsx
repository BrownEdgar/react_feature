import axios from 'axios'
import React from 'react'
import { useEffect,useState,useTransition } from 'react'
import Photos from './Photos'




export default function App() {
    const [photos, setPhotos] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [isPending,startTransition] = useTransition()
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => setPhotos(res.data))
    }, [])
    const handleChange = (e) =>{
        const {value} = e.target
        startTransition(()=>{setSearchValue(value)})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const photosFilter = (photos,searchValue) =>{
       return photos.filter(photo=>photo?.title.includes(searchValue))
    }
  return (
    <div>
        <h1>Use Transition Hook</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange ={handleChange}/>
        </form>
        {isPending && <h1>Loading...</h1>}
        <Photos photos={photosFilter(photos,searchValue)}/>

    </div>
  )
}
