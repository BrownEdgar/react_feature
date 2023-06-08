import React, { useState } from 'react'
import Form from './Form'
import Users from './Users';
import moment from 'moment';

import './App.scss'
import Sort from './Sort';

export default function App() {
	const [users, setUsers] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, surname, email, languages } = e.target;
		const user = {
			id: Date.now(),
			name: name.value,
			surname: surname.value,
			email: email.value,
			languages: languages.value,
			color: languages.style,
			registeredDate: moment()
		}
		setUsers([...users, user])
	}

	return (
		<div className='main'>
			<Form onSubmit={handleSubmit} />
			<hr />
			<Sort users={users}/>
			<Users users={users} />
		</div>
	)
}
