import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'
import { GiBasket } from 'react-icons/gi'
export default function Navbar() {


	return (
		<header>
			<ul>
				<li>
					<Link to="/" >Posts</Link>
				</li>
				<li>

					<Link to="/basket" >

						<span><GiBasket /></span>
					</Link>

				</li>
			</ul>
		</header>
	)
}
