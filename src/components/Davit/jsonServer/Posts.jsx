<<<<<<< HEAD
import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { FcEditImage } from 'react-icons/fc';
import "./Posts.css"

export default function Posts({posts}) {
const [isEdit, setIsEdit] = useState(false)
const [editablePostId, setEditablePostId] = useState(second)

const toggleEdi=(id)=>{
  setIsEdit(!isEdit)
}

  return (
    <div className='Posts'>
        {posts.map(elem=>{
            return(
                <div  className='Posts-item' key = {elem.id}>
                 {isEdit ? <input type='text' value={elem.title} /> : <h1>{elem.title}</h1>}
                 <p>{elem.body}</p>
                 <div className="buttons">
                    <Link onClick={()=>toggleEdi(elem.id)}>
                     <FcEditImage />
                    </Link>
                 </div>
                </div>
            ) 
            
        })}
    </div>
  )
=======
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BsCreditCard2Front } from 'react-icons/bs'
import { RiChatDeleteLine } from 'react-icons/ri'
import { FcCheckmark } from 'react-icons/fc'
import axios from 'axios'


import './Posts.css'

export default function Posts({ posts, getPosts }) {
	console.log('post render...')
	const [isEdit, setIsEdit] = useState(false)
	const [editablePost, setEditablePost] = useState(false)
	const postTitleRef = useRef(null)
	const postTitleRef1 = useRef(null)
	const toggleEdit = (id) => {
		setIsEdit(!isEdit)
		setEditablePost(id)
	}


	const updatePostTitle = () => {
		axios.patch(`http://localhost:3004/posts/${editablePost}`, {
			title: postTitleRef.current.value,
			body: postTitleRef1.current.value
		}).then(getPosts)
	}

	const removePost = () => {
		axios.delete(`http://localhost:3004/posts/${editablePost}`)
			.then(getPosts)
	}
	return (
		<div className='Posts'>
			{posts.map(elem => {
				return (
					<div key={elem.id} className='Posts-Item'>
						{(isEdit && editablePost === elem.id)
							? <textarea type='text' ref={postTitleRef} placeholder={elem.title} required />
							: <h1>{elem.title}</h1>}
						{(isEdit && editablePost === elem.id)
							? <textarea type='text' ref={postTitleRef1} placeholder={elem.body} required />
							: <p>{elem.body}</p>}
						<div className="buttons">
							<Link>
								<RiChatDeleteLine onClick={removePost} />
							</Link>
							<Link onClick={() => toggleEdit(elem.id)}>

								{(isEdit && editablePost === elem.id)
									? <FcCheckmark onClick={updatePostTitle} />
									: <BsCreditCard2Front />}

								{/* <BsCreditCard2FrontFill /> */}
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
>>>>>>> 1f5fcdba6cceaf2775f145f05cb98f827ee2dcf7
}
