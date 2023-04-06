import React from 'react'
import "./Modal.scss"
export default function Modal( { onclose, setDivShow} ) {
    return (
        <div className='Modal'>
        <div className='Modal-Content'>
            <h2>are you sure?</h2>
            <button onClick={() => onclose(false)}>cancel</button>
            <button onClick={() => {
                onclose(false)
                setDivShow(false)
            }}>delete</button>
        </div>
        </div>
    )
}