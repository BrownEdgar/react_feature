import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Posts from './Posts'

export default function Pagination() {
    const [posts, setPosts] = useState([])
    const [perPage, setPerPage] = useState(6)
    const [page, setPage] = useState(1)


    useEffect(() => {
      function getData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response => setPosts(response.data))
      .catch(err => console.log('invalid url:', err))
      }
      getData()
    },
     [])
    const up = page * perPage
    const down = up - perPage
    const currentPosts = posts.slice(down , up)

    const handleClick = (pageNumber) => {
        setPage(pageNumber)
    }

    
  return (
    <div>
        <Posts currentPosts={currentPosts} total={100} perPage={perPage} handleClick={handleClick} />
    </div>
  )
}
