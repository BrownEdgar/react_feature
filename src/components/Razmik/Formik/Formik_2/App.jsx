import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import './App.scss'


const initialValues = { firstName: '', lastName: '', email: '', websiteName: '', message: '', id: '' }
const validationSchema = Yup.object({
	firstName: Yup.string()
		.max(15)
		.matches(/^[A-Z]/, "username must started with uppercase!")
		.required('Required'),
	lastName: Yup.string()
		.max(15)
		.matches(/^[A-Z]/, "username must started with uppercase!")
		.required('Required'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Required'),
	message: Yup.string(),
	websiteName: Yup.string()
		.matches(/^[A-Z]/, "username must started with uppercase!")
		.required('Required')
})


export default function App() {
	const [users, setUsers] = useState([])
	const [notification, setNotification] = useState(false)
	const handleSubmit = (values, { resetForm }) => {
		values.id = Math.floor(Math.random() * (10000 - 1000) + 1000)
		setUsers([...users, values])
		resetForm()
		setNotification(true)
		setTimeout(setNotification, 3000, false)
	}
	return (
		<div className='container'>
			<div className={`alert ${notification ? 'show' : ''}`}>
				<p>User saved successfily! <br /> View your details below</p>
			</div>
			<div className='content'>
				<h1>Contact Us Form</h1>
				<div className='form'>
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
						validateOnChange={false}
						validateOnBlur={true}
					>

						<Form>
							<div>
								<Field type="text" name='firstName' id='firstName' placeholder='First Name' />
								<ErrorMessage name="firstName" component={"p"} />

								<Field type="text" name='lastName' id='lastName' placeholder='Last Name' />
								<ErrorMessage name="lastName" component={"p"} />

								<Field type="text" name='email' id='email' placeholder='Your Email' />
								<ErrorMessage name="email" component={"p"} />

								<Field type="text" name='websiteName' id='websiteName' placeholder='Website Name' />
								<ErrorMessage name="websiteName" component={"p"} />

								<Field as="textarea" name='message' id='message' placeholder='Write your message' />
								<ErrorMessage name="message" component={"span"} />
								<button type='submit'>Submit</button>
							</div>
						</Form>

					</Formik>
				</div>
			</div>
			<div className='table'>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Website Name</th>
						</tr>
						{users.map((user) => {
							return <tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.firstName}</td>
								<td>{user.lastName}</td>
								<td>{user.email}</td>
								<td>{user.websiteName}</td>
							</tr>
						})}
					</thead>
				</table>
			</div>
		</div>

	)
}

