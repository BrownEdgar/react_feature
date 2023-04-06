import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from '../Modal'
import './Users.scss'


export default function Users({ users, handleDelete }) {
	const [isOpen, setIsOpen] = useState(false)
	const [select, setSelect] = useState(null)
	const openDeleteModal = (id) => {
		setIsOpen(true)
		setSelect(id)
	}

	return (
		<div className='Users'>
			{isOpen &&
				<Modal>
					<div className="Modal-Content w-100">
						<h4>Are you sure you want to delete this user?</h4>
						<button onClick={() => setIsOpen(false)}>Cancel</button>
						<button onClick={() => {
							handleDelete(select)
							setIsOpen(false)
						}}>Delete</button>
					</div>
				</Modal>}

			{users.map(user => {
				return (
					<div className='Users__Item' key={user.id}>
						<h3 className='Users__name'>{user.name}</h3>
						<h4 className='Users__username'>{user.username}</h4>
						<p className='Users__email'>{user.email}</p>
						<button className='Users__Delete' onClick={() => openDeleteModal(user.id)}>Delete</button>

					</div>
				)
			})
			}
		</div>
	)
}
Users.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	}))
}

