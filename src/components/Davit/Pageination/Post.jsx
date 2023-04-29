import React from 'react'
import "./Post.css"

export default function Post({currectPosts ,total ,perPage}) {

  const Links = [];
  for (let i = 1; i <= Math.trunc(total/perPage); i++) {
    Links.push(i)
  }
  return (
    <div>
      <ul className='Posts'>
        {currectPosts.map(elem=>{
          return <li key={elem.id}>
            {elem.title}
          </li>
        })}
      </ul>



    <ul className='Pagination'>
      {Links.map((link,index) =>{
        return <li key={index}>
          <a href="#1">
            {link}
          </a>
        </li>
      })}
    </ul>
    </div>



  )
}
