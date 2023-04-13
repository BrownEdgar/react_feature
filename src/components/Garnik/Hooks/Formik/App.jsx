import React from 'react'
import  {useFormik} from 'formik'
import * as yup from "yup"

import "./App.scss"

const validationSchema = yup.object({
	username: yup
	.string()
	.min(3)
	.matches(/^[A-Z]/, "error")
	.required(),
	password: yup
	.string()
	.required()
	.min(6)
	.max(18)
	.matches(/\d/)
	.matches(/[A-Z]/),
	email: yup
	.string()
	.required()
	.email()
})

export default function App() {
	const formik = useFormik({
		initialValues: {
			username : "",
			password: "",
			email: ""
		},
		onSubmit: (values) => {
			console.log(values)
		},
		validationSchema,
	})

	return (
		<div className='App'>

			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor="username"></label>
					<input 
					type="text" 
					name='username' 
					id='username' 
          onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					/>
					{(formik.touched.username && formik.errors.username) ? <p className='errors'>{formik.errors.username}	</p> : null}
				</div>
				<div>
					<label htmlFor="password"></label>
					<input 
					type="text" 
					name='password' 
					id='password' 
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{(formik.touched.password && formik.errors.password) ? <p className='errors'>{formik.errors.password}	</p> : null}
				</div>
				<div>
					<label htmlFor="email"></label>
					<input
						type="email"
						name='email'
						id='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{(formik.touched.email && formik.errors.email) ? <p className='errors'>{formik.errors.email}	</p> : null}
				</div>
				<div>
					
					<input type="submit" value="save" />
				</div>
			</form>
		</div>
	)
}
