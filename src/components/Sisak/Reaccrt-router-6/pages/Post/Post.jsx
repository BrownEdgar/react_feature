import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Post() {
	const  {id} = useParams();
	const navigate = useNavigate()
	return (
		<div>
			<h1>Welcome to tho post page N {id}</h1>
			<button className='btn-link' onClick={() => navigate(-1)}>go back</button>
		</div>
	)
}
