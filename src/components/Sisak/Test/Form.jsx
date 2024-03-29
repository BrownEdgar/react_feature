import React from 'react'

export default function Form({ onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<div>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" string required/>
			</div>
			<div>
				<label htmlFor="surname">Surname</label>
				<input type="text" id="surname" required/>
			</div>
			<div>
				<label htmlFor="email">E-mail</label>
				<input type="email" id="email" required/>
			</div>
			<div>
				<label htmlFor="languages">Select your language</label>
				<select name="languages" id="languages" required>
					<option value=""></option>
					<option value="html&css">HTML & CSS</option>
					<option value="javascript">javascript</option>
					<option value="react">React.js</option>
					<option value="typescript">Typescript</option>
					<option value="python">Python</option>
				</select>
			</div>
			<div>
				<input type="submit" value="Register" />
			</div>
		</form>
	)
}
