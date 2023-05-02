import React from 'react'
import './Posts.css'

export default function Posts( {currentPosts, total, perPage, handleClick}) {
    const links = []
    for(let i = 1; i <= Math.floor(total / perPage); i++){
        links.push(i)
    }
  return (
    
    <div>
        <ul className='Posts'>
        {currentPosts.map(elem => {
            return <li key={elem.id}>{elem.title}</li>
        })}
    </ul>


        <ul className='Pagination'>
        {links.map((link, index) => {
            return <li key={index}>
                <a href="#!" onClick={() => handleClick(link)}>
                    {link}
                </a>
            </li>
        } )}
    </ul>
    </div>
    )
}
