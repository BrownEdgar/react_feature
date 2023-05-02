import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FcEditImage, FcCheckmark } from 'react-icons/fc'
import './Posts.css'
 
export default function Posts({posts}) {
  const [isEdit, setIsEdit] = useState(false)
  const [postId, setPostId] = useState(null)
  const postTitleRef = useRef(null)

  const toggleEdit = (id) => { 
    setIsEdit(!isEdit)
    setPostId(id)
  }

  const handleChange = (e) => { 


  }
  const updatePostTitle = () => { 
    axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      },
      data: {'title': postTitleRef.current.value }
    }
    
    )
   
  }
  return (
    <div className='Posts'>
    {posts.map(elem => {
        return (
          <div key={elem.id} className='Posts-item'>
            {(isEdit && postId === elem.id)  
            ? <textarea type='text' ref={postTitleRef} placeholder={elem.title} onChange=
            {handleChange} /> : <h1>{elem.title}</h1>}
            <p>{elem.body}</p>
            <div className="buttons"></div>
             <Link onClick={() => toggleEdit(elem.id)}>
              {(isEdit && postId === elem.id) 
              ?  <FcCheckmark  onClick={updatePostTitle}/> 
              :   <FcEditImage />}
             </Link>
          </div>
        )
    })}
    </div>
  )
}
