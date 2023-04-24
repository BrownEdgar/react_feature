import React ,{useState ,useRef} from 'react'
import { Link } from 'react-router-dom'
import { FcEditImage } from 'react-icons/fc'
import { FcRemoveImage } from 'react-icons/fc'
import { FcCheckmark } from 'react-icons/fc'

import './Posts.css'
import axios from 'axios'

export default function Posts({posts ,getPosts}) {
  const [isEdit, setIsEdit] = useState(false)
  const [editablePost, setEditablePost] = useState(null)
  const postTitleRef = useRef(null)
  const toggleEdit =(id) =>{
    setIsEdit(!isEdit)
    setEditablePost(id)
  }


  const updatePostTitle = () => { 
		axios.patch(`http://localhost:3004/posts/${editablePost}`, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			title: postTitleRef.current.value 
		})
}

const removePost =() =>{
  axios.delete(`http://localhost:3004/posts/${editablePost}`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then(getPosts)
}
  return (
    <div className='Posts'>
      {posts.map(elem=>{
        return(
          <div key={elem.id} className='Posts-Item'>
            {(isEdit && editablePost=== elem.id)
             ?<textarea type='text' ref={postTitleRef} placeholder={elem.title} required /> 
             :<h1>{elem.title}</h1>}
            <p>{elem.body}</p>
            <div className="buttons">
            <Link onClick={() => toggleEdit(elem.id)}>
            <FcRemoveImage onClick={removePost}/>
            {(isEdit && editablePost=== elem.id) 
            ? <FcCheckmark  onClick={updatePostTitle}/> 
            : <FcEditImage /> }
            </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
