import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <h1>404 PAGE NOT FOUND!!!</h1>
        <Link to="/" className='btn_link'>BACK TO HOME</Link>
    </div>
  )
}
