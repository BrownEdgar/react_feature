import React, { useState } from 'react'

import "./App.scss"
let count = 0;
export default function App() {
	const [users, setUsers] = useState([])
	const [notification, setNotification] = useState(false)
	const [error, setError] = useState(false)
	const [policyChecked, setPolicyChecked] = useState(true)

	const handleSubmit = (e) => {
		e.preventDefault();
		const { username, email, password, languages } = e.target;

		const user = {
			id: ++count,
			username: username.value,
			email: email.value,
			password: password.value,
			languages: languages.value
		} 

		if (users.length === 0) {
			setUsers([user])
		}else{
			setUsers([...users, user])
		}
		setNotification(true)
		setTimeout(setNotification, 3000, false)
		e.target.reset();
	}

	const handleBlur = (e) => { 
		const {value:email} = e.target;
		const emailExist = users.some(user => user.email.toLowerCase() === email.toLowerCase());
		if (emailExist) {
			setError(true)
		}else{
			setError(false)
		}
	}
	const checkPolicy = (e) => { 
		setPolicyChecked(!e.target.checked)
	}

	return (
		<div className='App'>
			<div className={`alert ${notification ? 'show' : ''}`}>
				<p>User saved successfily!</p>
			</div>
			<h1>Form in React</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input 
						type="email" 
						name="email" 
						id="email"
						onBlur={handleBlur} 
						required
						/>
						{error && <p className='error'>This email alredy exist</p>}
				</div>
				<div>
					<label htmlFor="username">username</label>
					<input 
						type="text" 
						name="username" 
						id="username" 
						required
						/>
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input 
						type="text" 
						name="password" 
						id="password" 
						required
						/>
				</div>
				<div>
					<label htmlFor="languages">select languages</label>
					<select name="languages" id="languages" required>

						<option value="js" defaultValue>javascript</option>
						<option value="html">html5</option>
						<option value="css3">css3</option>
						<option value="react">React.js</option>
						<option value="typescript">Typescript</option>
					</select>
				</div>

				<div className="withCheck">
					<label htmlFor="privacy">
						<input type="checkbox" name="privacy" id="privacy" onChange={checkPolicy}/> I agree
					</label>
				</div>
				<div>
					<input type="submit" value="save" disabled={policyChecked} />
				</div>
			</form>

		</div>
	)
}