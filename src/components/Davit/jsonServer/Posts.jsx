import React ,{useState ,useRef} from 'react'
import { Link } from 'react-router-dom'
import { BsCreditCard2Front } from 'react-icons/bs'
import { RiChatDeleteLine } from 'react-icons/ri'
import { FcCheckmark } from 'react-icons/fc'
import { BsCreditCard2FrontFill } from 'react-icons/bs'

import './Posts.css'
import axios from 'axios'

export default function Posts({posts ,getPosts}) {
  const [isEdit, setIsEdit] = useState(false)
  const [editablePost, setEditablePost] = useState(null)
  const postTitleRef = useRef(null)
  const postTitleRef1 = useRef(null)
  const toggleEdit =(id) =>{
    setIsEdit(!isEdit)
    setEditablePost(id)
  }


  const updatePostTitle = () => { 
		axios.patch(`http://localhost:3004/posts/${editablePost}`, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			title: postTitleRef.current.value ,
      body: postTitleRef1.current.value 
		}).then(getPosts)
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
             {(isEdit && editablePost=== elem.id)
             ?<textarea type='text' ref={postTitleRef1} placeholder={elem.body} required />
             :<p>{elem.body}</p>}
            <div className="buttons">
            <Link onClick={() => toggleEdit(elem.id)}>
            <RiChatDeleteLine onClick={removePost}/>

            {(isEdit && editablePost=== elem.id) 
            ? <FcCheckmark  onClick={updatePostTitle}/> 
            : <BsCreditCard2Front /> }

            {/* <BsCreditCard2FrontFill /> */}
            </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
