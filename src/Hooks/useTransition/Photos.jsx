import React from 'react'
import './Photos.css'
export default function Photos({photos}) {

  return (
    <div className='Photos'>
        {
            photos.map(photo =>{
                return <div key = {photo.id}>
                    <img src={photo.url} alt = {photo.title}/>
                    <h2>{photo.title}</h2>
                </div>
            })
        }


    </div>
  )
}
