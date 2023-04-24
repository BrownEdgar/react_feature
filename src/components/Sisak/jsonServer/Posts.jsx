import React, { useState,useRef } from 'react'
import { Link  } from 'react-router-dom'

import { FcEditImage, FcCheckmark, FcRemoveImage   } from 'react-icons/fc'
import { ImCancelCircle } from 'react-icons/im'
import './Posts.css'
import axios from 'axios';

export default function Posts({ posts, getPosts }) {
	const [isEdit, setIsEdit] = useState(false);
	const [ediatablePostId, setEdiatablePostId] = useState(null);
	const postTitleRef =  useRef(null);

	const toggleEdit = (id) => { 
		setEdiatablePostId(id)
		setIsEdit(!isEdit)
	 }

	 const handleChange = (e) =>{

	 }

	const updatePostTitle = () => { 
		axios.patch(`http://localhost:3004/posts/${ediatablePostId}`, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			title: postTitleRef.current.value 
		})
		.then(getPosts)
		.catch(err => console.log(err))
}
const handleDelete = (id) => {
  axios.delete(`http://localhost:3004/posts/${id}`)
    .then(getPosts) 
    .catch(err => console.log(err));
}
	return (
		<div className='Posts'>
			{posts.map(elem => {
				return (
					<div key={elem.id} className='Posts-Item'>
						{(isEdit && ediatablePostId === elem.id) 
						? <textarea type="text" ref={postTitleRef} placeholder={elem.title} onChange={handleChange} /> : <h1>{elem.title}</h1>}
						<button className="deleteButton" onClick={() => handleDelete(elem.id)}>
							<FcRemoveImage />
							</button>
						<p>{elem.body}</p>
						<div className="buttons">
							<Link onClick={() => toggleEdit(elem.id)}>
								{(isEdit && ediatablePostId === elem.id) 
								? <FcCheckmark onClick={updatePostTitle}/> 
								: <FcEditImage />}
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}
