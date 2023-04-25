import React from 'react'

import "./Navbar.scss"

export default function Navbar() {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/posts">Posts</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
