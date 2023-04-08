import React, {useState} from 'react'
import "./App.scss"
export default function App() {
	const [formDate, setFormDate] = useState({
		name: ""
	})
	const handleSubmit = (e) => {
		e.preventDefault()
		const {username} = e.target;
		setFormDate({username: username.value})
		e.target.reset()
	}
	const handleChange = (e) => {
		setFormDate({username: e.target.value})
	}
	return (
		<div className='App'>
			<h1>Hello {formDate.username}</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">username</label>
					<input type="text" name="username" id='username' value={formDate.username} onChange={handleChange} />
				</div>
				<div>
					<input type="submit" value="save" />
				</div>
			</form>
		</div>
	)
}
