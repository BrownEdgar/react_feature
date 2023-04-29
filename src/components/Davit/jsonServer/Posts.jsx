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
}
