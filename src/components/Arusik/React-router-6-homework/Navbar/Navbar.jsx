import React from 'react'

import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/signIn">Sign in</Link>
                </li>
                <li>
                    <Link to="/signUp">Sign up</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}
