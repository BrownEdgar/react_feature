import React from 'react'

import './Posts.css'

export default function Posts({posts,total,perPage, handleClick}) {
    const links = [];
    for(let i = 1;i <= Math.floor(total/perPage);i++){
        links.push(i)
    }
  return (
    <div>
        <ul className='Posts'>
        {posts.map((elem,index) =>{
            return <li key = {elem.id}>{elem.title}</li>
        })}
        </ul>
        <ul className='Pagination'>
        {links.map((link,index) =>{
            return <li key = {index} onClick={()=>handleClick(link)}>
                <a href = '#!'>
                    {link}
                </a>
            </li>
        })}
        </ul>
    </div>
  )
}
