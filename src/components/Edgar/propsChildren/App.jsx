import React, { useState } from 'react'
import Modal from './Modal'

import "./App.scss"

export default function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [divShow, setDivShow] = useState(true)
	return (
		<div>
			{isOpen && <Modal setIsOpen={setIsOpen}>
			
				<h2>Lorem ipsum dolor sit amet.</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error enim non omnis dolorum eius harum animi fuga beatae cum? Animi.</p>
					<button onClick={() => setIsOpen(false)}>cancel</button>
					<button onClick={() => {
						setIsOpen(false)
						setDivShow(false)
					}}>delete</button>
				
				</Modal>}
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
