import React, { useState } from 'react'
import Modal from "./Modal"

import "./App.scss"

export default function App() {
  const [isOpen, setIsopen] = useState(false)
  const [divShow, setDivShow] = useState(true)
  
  return (
    <div>
        {isOpen && <Modal>
         <div className="Modal-Content w-100">
         <h2>Are you sure?</h2>
         <button onClick={() => setIsopen(false)}>Cancel</button>
         <button onClick={() => {
           setIsopen(false) 
           setDivShow(false)
           }}>Delete</button>
       </div>
        </Modal>}

        { 
          divShow &&(
            <div className='wrapper'>
            <h2>React.js</h2>
            <button className='btn_delete' onClick={() => setIsopen(true)}>Delete</button>
          </div>
        )
        }
    </div>
    
  )
}