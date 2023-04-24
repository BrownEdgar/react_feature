import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/ROUTES';

import './SignIn.scss'

const initialValues = { email: '', password: '' }
const validationSchema = Yup.object({
	email: Yup.string()
		.required('Required'),
	password: Yup.string()
		.required('Required')
})

export default function SignIn() {
	const navigate = useNavigate()

	const handleSubmit = async (values, { resetForm }) => {
		if (values.email === 'admin' && values.password === 'admin') {
			localStorage.setItem('admin', true)
		}
		resetForm()
	}
	useEffect(() => {
		if (!!localStorage.getItem('admin', true)) {
			navigate(ROUTES.HOME)
		}
	}, [])


	return (
		<div className='container'>
			<div className='content'>
				<h1>Sign In</h1>
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
								<Field type="text" name='email' id='email' placeholder='Your Email' />
								<ErrorMessage name="text" component={"p"} />
								<Field type="password" name='password' id='password' placeholder='Password' />
								<ErrorMessage name="password" component={"p"} />
								<button type='submit'>Login</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	)
}

