import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../routes/ROUTES'

import "./Navbar.scss"

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to={ROUTES.HOME}>Home</Link>
					</li>
					<li>
						<Link to={ROUTES.BLOG}>Blog</Link>
					</li>
					<li>
						<Link to={ROUTES.POSTS}>Posts</Link>
					</li>
					<li>
						<Link to={ROUTES.SIGNIN}>Sign In</Link>
					</li>
					<li>
						<Link to={ROUTES.SIGNUP}>Sign Up</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
