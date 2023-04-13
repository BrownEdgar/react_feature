import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup"

import "./App.scss"
import { useNavigate } from 'react-router-dom'

const initialValues = {
	firstname: "",
	lastname: "",
	email: "",
	message: "",
	website: "",
}

const validationSchema = yup.object({
	firstname: yup
		.string()
		.min(3)
		.matches(/^[A-Z]/, "firstname must started with uppercase!")
		.required(),
	lastname: yup
		.string()
		.min(3)
		.matches(/^[A-Z]/, "lastname must started with uppercase!")
		.required(),
	email: yup.string().email().required()
})

export default function App() {
	const [data, setData] = useState([]);
	const navigate = useNavigate()
	const handleSubmit = (values, { resetForm }) => {
		setData([...data, values]);
		resetForm()
		navigate('/login')

	}

	return (
		<div className='App'>
			<h1>Responsive Contact Us Form</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				validateOnChange={true}
				validateOnBlur={true} onSubmit={handleSubmit}
			>
						<Form>
							<div className='firstname'>
								<Field type="text" name='firstname' id="firstname" placeholder='First Name' />
								<ErrorMessage name='firstname' component='p' />
							</div>
							<div className='lastname'>
								<Field type="text" name='lastname' id="lastname" placeholder='Last Name' />
								<ErrorMessage name='lastname' component='p' />
							</div>
							<div className='email'>
								<Field type="email" name='email' id="email" placeholder='Email Address' />
								<ErrorMessage name='email' component='p'>
								</ErrorMessage>
							</div>
							<div className='website'>
								<Field type="text" name='website' id="website" placeholder='WebSite Name' />
								<ErrorMessage name='website' component='p' />
							</div>
							<div className='message'>
								<Field type="text" name='message' id="message" as="textarea" placeholder='Write Your Message' />
								<ErrorMessage name='message' component='p' className='error' />
							</div>
							<div>
								<input type="submit" value="SUBMIT" className='btn' />
							</div>
						</Form>
			</Formik>
		</div>
	)
}
