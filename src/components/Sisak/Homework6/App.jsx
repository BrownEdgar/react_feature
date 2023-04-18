import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'
import "./App.scss"

const initialValues = {
	firstname: "",
	lastname: "",
	email: "",
	message: "",
	website: ""
}
const validationSchema = yup.object({
	firstname: yup
	.string()
	.required()
	.matches(/^[A-Z]/, "Օգտվողի անունը պետք է սկսվի մեծատառով!")
	.min(4),
	lastname: yup
	.string()
	.required()
	.matches(/^[A-Z]/, "Օգտվողի անունը պետք է սկսվի մեծատառով!")
	.min(5),
	email: yup
	.string()
	.email()
	.required(),
	website: yup
	.string()
	.required()
})

export default function App() {
	
	const [data, setData] = useState([])
	const handleSubmit = (values) => {
		setData([...data, values]);
		console.log(values.firstname);
	}
	return (
		<div className="App">
			<h1>Responsive Contact us Form</h1>
			<Formik 
			initialValues={initialValues} 
			validationSchema={validationSchema} 
			validateOnChange={true} 
			validateOnBlur={true} 
			onSubmit={handleSubmit}>
				{(formik) => {
					return (
						<Form>
							<div className="Registr">
							<div className="Firstname">
								<label htmlFor="firstname">First Name</label>
								<Field type="text" name="firstname" id="firstname" />
								<ErrorMessage name="firstname" component="p"className="error"  />
							</div>
							<div className="Lastname">
								<label htmlFor="lastname">Last Name</label>
								<Field type="text" name="lastname" id="lastname" />
								<ErrorMessage name="lastname" component="p" className="error" />
							</div>
							</div>
							<div className="Registr">
							<div className="Email">
								<Field type="email" name="email" id="email" placeholder="Email Adress" />
								<ErrorMessage name="email" component="p" className="error"  />
							</div>
							<div className="Website">
								<Field type="text" name="website" id="website" placeholder="Website Name" />
								<ErrorMessage name="website" component="p" className="error" />
							</div>
							</div>
							<div className="Registr">
								<Field type="text" name="message" id="message" as="textarea" placeholder="Write your message" />
								<ErrorMessage name="message" component="p" className="error" />
							</div>
							<div className="btn">
								<input type="submit" value="SUBMIT" className="Submit" />
							</div>
						</Form>
					)
				}}
			</Formik>

		</div>
	)
}
