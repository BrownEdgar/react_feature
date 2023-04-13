import React from 'react'
import { useParams } from 'react-router-dom'

export default function Post() {
	const {id} = useParams()
	return (
		<div>
			<h1>Welcome to the post page N {id}</h1>
		</div>
	)
}
