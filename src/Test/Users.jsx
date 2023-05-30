import React from 'react'

export default function Users({users}) {
	return (
		<ul className='main-list'>
				{
				users.map((user) => {
						return (
							<li key={user.id}>
								<span className='date'>at {user.registeredDate.calendar()}</span>
								<span>{user.name}</span>
							</li>
					)
					})
				}
		</ul>
	)
}
