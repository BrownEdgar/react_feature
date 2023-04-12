import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
	return (
		<div>
			<h1>Sorry page not found</h1>
		  <Link to="/" className="btn-link">Go Home</Link>
		</div>
	)
}
