import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/ROUTES';

import './SignUp.scss'

const initialValues = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', id: '' }
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
	password: Yup.string()
		.min(6)
		.max(16)
		.required('Required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export default function SignUp() {
	const [users, setUsers] = useState([])
	const navigate = useNavigate()
	const handleSubmit = (values, { resetForm }) => {
		console.log(values)
		values.id = Math.floor(Math.random() * (10000 - 1000) + 1000)
		setUsers([...users, values])
		setTimeout(() => { 
			navigate(ROUTES.SIGNIN)
		 }, 500)
		resetForm()

	}

	useEffect(() => {
		console.log(1111111)
		localStorage.setItem('user', JSON.stringify(users))
	}, [users.length])
	

	return (
		<div className='container'>
			<div className='content'>
				<h1>Please Register</h1>
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

								<Field type="password" name='password' id='password' placeholder='Password' />
								<ErrorMessage name="password" component={"p"} />

								<Field type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password' />
								<ErrorMessage name="confirmPassword" component={"p"} />
								<button type='submit'>Submit</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	)
}

