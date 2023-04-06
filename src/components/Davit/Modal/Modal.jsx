import React from 'react'
import './Modal.scss'

export default function Modal({children}) {
  return (
    <div className='Modal'>
        {children}
    </div>
  )
}
