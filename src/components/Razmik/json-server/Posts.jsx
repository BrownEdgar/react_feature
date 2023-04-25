import React, { useState,useRef } from 'react'
import { Link  } from 'react-router-dom'
import {AiFillDelete} from 'react-icons/ai'
import { FcEditImage, FcCheckmark } from 'react-icons/fc'
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
    const handleDelete = () =>{
        axios.delete(`http://localhost:3004/posts/${ediatablePostId}`, {
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},})
            .then(getPosts)
		    .catch(err => console.log(err))
    }


	return (
		<div className='Posts'>
			{posts.map(elem => {
				return (
					<div key={elem.id} className='Posts-Item'>
						{(isEdit && ediatablePostId === elem.id) 
						? <textarea type="text" ref={postTitleRef} placeholder={elem.title}  /> : <h1>{elem.title}</h1>}
						<p>{elem.body}</p>
						<div className="buttons">
                            <Link  onClick={()=>handleDelete(elem.id)}>
                                {(isEdit && ediatablePostId === elem.id)
                                ?<AiFillDelete />
                                : null}
                            </Link>
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
