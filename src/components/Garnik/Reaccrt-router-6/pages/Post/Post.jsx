import React from 'react'
import {link, useNavigate, useParams} from "react-router-dom"

export default function Post() {
	const {id} = useParams()
	const navigate = useNavigate()
	return (
		<div>
      <h1>Welcome to N{id}</h1>
			<button className='btn-link' onClick={() => navigate(-1)}></button>
		</div>
	)
}
