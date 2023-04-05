import React, { useState } from 'react'

import "./App.scss"
let count = 0;

export default function App() {
	const [users, setUsers] = useState([]);
	const [information, setInformation] = useState(false);
	const [error, setError] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		const {name, email} = e.target;
		const user = {
			id: ++ count,
			name: name.value,
			email: email.value,
		}
		setUsers([...users, user])
		setInformation(true)
		setTimeout(setInformation, 5000, false );
		  e.target.reset()
		}
	const handleBlur = (e) => {
		const { value:email } = e.target;
		const emailExist = users.some(user => user.email.toLowerCase() === email.toLowerCase());
		if (emailExist) {
			setError(true)
		}else {
			setError(false)
		}
	}
	return (
		<div className="App">
			<div className={`information ${information ? 'show' : ''}`}>
				<p>You have successfully registered on our website!</p>
			</div>
			<form onSubmit={handleSubmit}>
			<div>
				<h1>Contact Us</h1>
				<h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo laudantium expedita, praesentium vel at laboriosam? Dolor id quia eveniet ducimus. Velit accusantium sequi nulla tempora esse.</h3>
					<input 
					type="text" 
					name="name" 
					id="name" 
					placeholder="Name"
					required
					 />
					<input 
					type="text" 
					name="email" 
					id="email"
					placeholder="Email"
					onBlur={handleBlur}
					required
					 />
					 <input type="submit" value="SEND" />
				</div>
					 {error && <p className="error" >This email is already exist!</p>}
					</form>
				</div>
	)
}
