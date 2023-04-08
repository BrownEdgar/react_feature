import React from 'react'
import {  Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import * as yup from "yup"

import "./App.scss"


const initialValues = {
	username: "",
	password: "",
	email: "",
	message: "",
	languages: [],
}

const validationSchema = yup.object({
	username: yup
		.string()
		.min(3)
		.matches(/^[A-Z]/, "username must started with uppercase!")
		.required(),

	password: yup.string().matches(/[A-Z]/).required().min(6).max(18).matches(/\d/, "tur indz number"),
	email: yup.string().email().required()
})

export default function App() {
	
	const handleSubmit = (values) => {
		axios({
			method: 'POST',
			url: 'https://jsonplaceholder.typicode.com/posts'
		}, { data: values })
			.then(response => console.log(response))
		
	}

	return (
		<div className='App'>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={true}
				validateOnBlur={true}
				onSubmit={handleSubmit}
			>
				{(formik) => {
					return (
						<Form >
							<div>
								<label htmlFor="username">username</label>
								<Field type="text" name='username' id="username" />
								<ErrorMessage name='username' component='p' />
							</div>
							<div>
								<label htmlFor="password">password</label>
								<Field type="text" name='password' id="password" />
								<ErrorMessage name='password' component='p' className='error' />
							</div>

							<div>
								<label htmlFor="message">message</label>
								<Field type="text" name='message' id="message" as="textarea" />
								<ErrorMessage name='message' component='p' className='error' />
							</div>

							<div>
								<label htmlFor="languages">
									languages
								</label>
								<Field type="checkbox" value="js" name="languages" />
								<Field type="checkbox" value="react.js" name="languages" />
								<Field type="checkbox" value="next.js" name="languages" />
								<Field type="checkbox" value="nust.js" name="languages" />
							</div>
							<div>
								<label htmlFor="email">email</label>
								<Field type="email" name='email' id="email" />
								<ErrorMessage name='email'>
									{(err) => <p className="error">{err}</p>}
								</ErrorMessage>
							</div>
							<div>
								<input type="submit" value="save" disabled={!formik.isValid || Object.keys(formik.touched).length === 0} />
							</div>
							<div>
								<pre>
									{JSON.stringify(formik, null, 1)}
								</pre>
							</div>
						</Form>
					)
				}}


			</Formik>
		
		</div>

	)
}
