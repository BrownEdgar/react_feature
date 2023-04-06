import React, { useState } from 'react'
import Modal from './Child'

import "./App.scss"

export default function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [divShow, setDivShow] = useState(true)
    return (
        <div>
            {isOpen && <Modal 
             onclose={setIsOpen}
              setDivShow={setDivShow}
            />}
            {
                divShow && (     
            <div className="wrapper">
            <h2>React.js</h2>
            <button
             className='btn_delete'
            onClick={() => setIsOpen(true)}
            >delete</button>
        </div>
                )
            }
        </div>

    ) 
}