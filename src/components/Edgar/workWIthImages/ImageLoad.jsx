import React, { useState } from 'react'
import Book from './photo.jpg'

export default function App() {
	const [url, setUrl] = useState('https://images.unsplash.com/photo-1679595021359-9a1d9b543bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')
	return (
		<div>
			{/* varian 1 */}
			{/* <img src="https://images.unsplash.com/photo-1679595021359-9a1d9b543bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="book" /> */}
			{/* varian 2 */}
			{/* <img src={url} alt="book" /> */}
			{/* varian 3 */}
			{/* <img src={Book} alt="" /> */}
			{/* varian 4 */}
			{/* <img src="./images/photo.jpg" alt="" /> */}
		</div>
	)
}
