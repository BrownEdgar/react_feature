import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBasket3Fill } from 'react-icons/bs';


export default function Navbar() {
  return (
    <header>
        <ul>
            <li>
                <Link to="/">Posts</Link>
            </li>
            <li>

              <Link to="/basket">Basket<span><BsFillBasket3Fill/></span></Link>
              
            </li>
        </ul>
    </header>
  )
}
