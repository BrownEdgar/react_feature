import React, { useState } from 'react'
import Form from './Form'
import Users from './Users';
import moment from 'moment';

import './App.scss'

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
			registeredDate: moment()
		}
		setUsers([...users, user])
	}

	return (
		<div className='main'>
			<Form onSubmit={handleSubmit} />
			<hr />
			<Users users={users} />
		</div>
	)
}
