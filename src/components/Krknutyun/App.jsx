import React, { useState} from 'react'
import './App.css'
import Questions from './Questions';

export default function App() {
	const [isActive, setIsActive] = useState(false)
	const handleClick = () => { 
		setIsActive(!isActive)
	 }
	 return (<Questions isActive={isActive} handleClick={handleClick}/>)
}




