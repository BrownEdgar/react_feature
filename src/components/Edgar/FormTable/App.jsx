import React, { useState } from 'react'
import data from './data.json'
import './App.scss'
import MyForm from './MyForm'
import Users from './Users'


///ԿԱԶՄԱԿԵՐՊԵԼ ՍՈՐՏԱՎՈՐՈՒՄ
export default function App() {
	const [users, setUsers] = useState(data)

	const handleSubmit = (e) => {
		e.preventDefault();

	}

	return (
		<div className='wrapper'>
			<header>
				<p>Users <span>{users.length}</span></p>
			</header>
			<div className="wrapper-form">
				<MyForm handleSubmit={handleSubmit} />
			</div>
			<div className="wrapper-table">
				<Users
					users={users}

				/>
			</div>
		</div>
	)
}
