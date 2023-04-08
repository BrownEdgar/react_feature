import React, { useState }from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

import "./App.scss";

const validationSchema = yup.object({
	username: yup
	.string()
	.min(4)
	.matches(/^[A-Z]/, "Օգտվողի անունը պետք է սկսվի մեծատառով!")
	.required(),
	email: yup
	.string()
	.email()
	.required(),
	password: yup
	.string()
	.matches(/\d/, "number")
	.min(8)
	.max(15),
	confirmPassword: yup
	.string()
	.matches(/\d/, "number")
	.min(8)
	.max(15)
	.test("Գաղտնաբառերը պետք է համընկնեն", function (value) {
		return this.parent.password === value;
	})
})
let count = 0
export default function App() {
	const [users, setUsers] = useState([])

	const formik = useFormik({
	initialValues: {
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	},
	onSubmit:(values) => {
		console.log(values)
	},
	validationSchema,
	})
	const handleSubmit = (e) =>{
		e.preventDefault()
		const {username, email} = e.target

		const user = {
			id: ++count,
			username: username.value,
			email: email.value
		}
		if (user.length === 0) {
			setUsers([user])
		}else{
			setUsers([...users, user])
		}
		e.target.reset()
	}
	
	return (
		<div className="Container1">
		<div className="Html">
		<div className="Title">
			<h1>HTML CSS</h1>
			<h1>Registration</h1>
			<h1>Form</h1>
			<h1>Template</h1>
			<h2>Join Us</h2>
		</div>
		</div>
		<div className="App">
			<div className="Registr">
			<form onSubmit={handleSubmit}>
			<div>
				<input 
				type="text" 
				name="username" 
				id="username" 
				placeholder="Add username"
				onChange={formik.handleChange} 
				onBlur={formik.handleBlur}
				value={formik.values.username} />
				{(formik.touched.username && formik.errors.username)? <p className="errors">{formik.errors.username}</p> : null}
				<label htmlFor="username">Username</label>
			</div>
			<div>
				
				<input 
				type="text" 
				name="email" 
				id="email" 
				placeholder="Your email" 
				onBlur={formik.handleBlur}
				value={formik.values.email} />
				{(formik.touched.email && formik.errors.email) ? <p className="errors">{formik.errors.email}</p> : null}
				<label htmlFor="email">Email</label>
			</div>
			<div>
				<input 
				type="password" 
				name="password" 
				id="password" 
				placeholder="........"
				onBlur={formik.handleBlur}
				onChange={formik.handleChange} />
				{(formik.touched.password && formik.errors.password) ? <p className="errors">{formik.errors.password}</p> : null}
				<label htmlFor="password">Password</label>
			</div>
				<div>
				<input 
				type="password" 
				name="confirmPassword" 
				id="confirmPassword" 
				placeholder="........" 
				onBlur={formik.handleBlur}
				onChange={formik.handleChange} />
				{(formik.touched.confirmPassword && formik.errors.confirmPassword)? <p className="errors">{formik.errors.password}</p> : null}
				<label htmlFor="password">Confirm Password</label>
			</div>
				<input 
				type="submit" 
				value="Submit" />
			</form>
			 </div>
			</div>
		</div>
	)
}
