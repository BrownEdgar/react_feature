import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../routes/ROUTES'

import "./Navbar.scss"

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink 
						className={({isActive}) => isActive && "active-link"}
						to={ROUTES.HOME}>Home</NavLink>
					</li>
					<li>
						<NavLink 
						className={({isActive}) => isActive && "active-link"}
						to={ROUTES.BLOG}>Blog</NavLink>
					</li>
					<li>
						<NavLink 
						className={({isActive}) => isActive && "active-link"}
						to={ROUTES.POSTS}>Posts</NavLink>
					</li>
					<li>
						<NavLink 
						className={({isActive}) => isActive && "active-link"}
						to={ROUTES.ABOUT}>About</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
