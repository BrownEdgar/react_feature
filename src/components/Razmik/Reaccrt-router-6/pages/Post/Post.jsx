import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './Post.scss'

export default function Post() {
   const [post, setPost] = useState([])
   const {id} =  useParams()
   const navigate = useNavigate()

   useEffect(()=>{
    axios.get(`https://dummyjson.com/posts/${id}`)
    .then(response => setPost(response.data))
    },[id])

  return (
    <div className='PostPageContent'>
        <h1>Welcome to the post page N {id}</h1>
        <div className='every-post'>
          <h2>Title: {post.title}</h2>
          <p>Body: {post.body}</p>
          <p>UserId: {post.userId}</p>
          <p>Reactions: {post.reactions}</p>
    </div>
        <button  onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}
