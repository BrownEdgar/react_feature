import React, { useRef, useEffect } from 'react'

import "./Modal.scss"

export default function Modal({ children, setIsOpen }) {
	const elementRef = useRef(null)

	useEffect(() => {
		
		const handleClick = (e) => { 
			if (e.target.classList.contains('Modal') && e.target !== elementRef.current) {
				setIsOpen(false)
			}
		 }
		window.addEventListener('click', handleClick)
		
		return () => {
			window.removeEventListener('click', handleClick)
		}
	}, [])
	

	return (
		<div className='Modal'>
			<div className="Modal-Content w-100" ref={elementRef}>
			
			{children}
			</div>
		</div>
	)
}
