import React from 'react'
import { Link } from 'react-router-dom'
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
						<Link to={ROUTES.SIGNUP}>SignUp</Link>
					</li>
					<li>
						<Link to={ROUTES.SIGNIN}>SignIn</Link>
					</li>
					<li>
						<Link to={ROUTES.BLOG}>Blog</Link>
					</li>
					<li>
						<Link to={ROUTES.POSTS}>Posts</Link>
					</li>		<li>
						<Link to={ROUTES.ABOUT}>About</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
