import React from 'react'
import { Link } from 'react-router-dom'
import { FcEditImage } from 'react-icons/fc'

import "./Posts.css"

export default function Posts({posts}) {
	const [isEdit, setIsEdit] = useState(second)
	return (
		<div className='Posts'>
    {posts.map(elem => {
			return (
				<div key={elem.id} className='Posts-Item'>
          <h1>{elem.title}</h1>
					<p>{elem.body}</p>
					<div className='buttons'>
           <Link>
					 <FcEditImage />
					 </Link>
					</div>
				</div>
			)
		})}
		</div>
	)
}
