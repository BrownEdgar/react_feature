import React from 'react'

export default function Posts({posts}) {
  
  return (
    <div>
        <ul className='Posts'>
        {posts.map(elem =>{
            return <li key = {elem.id}>{elem.title}</li>
        })}
        </ul>
    </div>
  )
}
