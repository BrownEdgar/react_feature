// import React, { useState } from 'react'
// import { useFormik } from 'formik'
// import * as yup from "yup"

// import "./App.scss"
// <<<<<<< HEAD
// // const validationSchema = yup.object({
// //     username: yup
// //     .string()
// //     .min(3)
// //     .matches(/^[A-Z]/, "username must started with uppercase!")
// //     .required(),
// //     email: yup
// //     .string()
// //     .required()
// //     .email(),
// //     password: yup
// //     .string()
// //     .matches(/[A-Z]/)
// //     .required()
// //     .min(6)
// //     .max(18)
// //     .matches(/\d/, "number"),
// // })
// =======
// const validationSchema = yup.object({
// 	username: yup
// 		.string()
// 		.min(3)
// 		.matches(/^[A-Z]/, "username must started with uppercase!")
// 		.required(),
// 	email: yup
// 		.string()
// 		.required()
// 		.email(),
// 	password: yup
// 		.string()
// 		.matches(/[A-Z]/)
// 		.required()
// 		.min(6)
// 		.max(18)
// 		.matches(/\d/, "number"),
// 	confirmpassword: yup
// 		.string()
// 		// .matches(/[A-Z]/)
// 		// .required()
// 		// .min(6)
// 		// .max(18)
// 		// .matches(/\d/, "number")
// 		.test('passwords-match', 'Passwords must match', function (value) {
// 			return this.parent.password === value;
// 		})
// })
// >>>>>>> 706bb8985f78a9da9199adc71cd4e0ff5ab28ea6
// let count = 0
// export default function App() {
// 	const [users, setUsers] = useState([])


// <<<<<<< HEAD
//     const formik = useFormik({
//         initialValues: {
//             username: '',
//             email: '',
//             password: '',
//             confirmpassword: ''
//         },
//         // onSubmit:(values) =>{
//         //     console.log(values)
//         // },
//         onSubmit:(values, {resetForm}) =>{
//             console.log(values)
//             const user = {
//                 id: ++count,
//                 ...values
//             }
//             setUsers([...users, user])
//             resetForm()
//         }
//         // validationSchema ,
//     })
    
    

//   return (
//     <div className='Main'>
//         <div className='Text'>
//             <div className='texts'>
//                 <h2>HTML CSS</h2>
//                 <h3>Registration</h3>
//                 <h3>Form</h3>
//                 <h3>Template</h3>
//                 <h4>Join Us</h4>
//             </div>
//         </div>
//         <div className='App'>
//             <div className='Info'>
//             <form onSubmit={formik.handleSubmit} >
//             <div>
//                 <input 
//                 type="text" 
//                 name="username" 
//                 id="username"
//                 placeholder='Add Username'
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.username}
                
//                  />
//                 {(formik.touched.username && formik.errors.username) ? <p className='errors'>{formik.errors.username} </p> : null}
// =======
// 	const formik = useFormik({
// 		initialValues: {
// 			username: '',
// 			email: '',
// 			password: '',
// 			confirmpassword: ''
// 		},
// 		onSubmit: (values) => {
// 			setUsers([...users, values])
// 		},
// 		validationSchema,
// 	})


// 	return (
// 		<div className='Main'>
// 			<div className='Text'>
// 				<div className='texts'>
// 					<h2>HTML CSS</h2>
// 					<h3>Registration</h3>
// 					<h3>Form</h3>
// 					<h3>Template</h3>
// 					<h4>Join Us</h4>
// 					<pre>
// 						{JSON.stringify(users, null,1)}
// 					</pre>
// 				</div>
// 			</div>
// 			<div className='App'>
// 				<div className='Info'>
// 					<form onSubmit={formik.handleSubmit} >
// 						<div>
// 							<input
// 								type="text"
// 								name="username"
// 								id="username"
// 								placeholder='Add Username'
// 								onChange={formik.handleChange}
// 								onBlur={formik.handleBlur}
// 								value={formik.values.username}
// >>>>>>> 706bb8985f78a9da9199adc71cd4e0ff5ab28ea6

// 							/>
// 							{(formik.touched.username && formik.errors.username) ? <p className='errors'>{formik.errors.username} </p> : null}

// 							<label htmlFor="username">Username</label>
// 						</div>
// 						<div>
// 							<input
// 								type="text"
// 								name="email"
// 								id="email"
// 								placeholder='Your Email'
// 								onChange={formik.handleChange}
// 								onBlur={formik.handleBlur}
// 								value={formik.values.email}

// 							/>
// 							{(formik.touched.email && formik.errors.email) ? <p className='errors'>{formik.errors.email} </p> : null}
// 							<label htmlFor="email">Email</label>
// 						</div>
// 						<div>
// 							<input
// 								type="password"
// 								name="password"
// 								id="password"
// 								onChange={formik.handleChange}
// 								onBlur={formik.handleBlur}

// 							/>
// 							{(formik.touched.password && formik.errors.password) ? <p className='errors'>{formik.errors.password} </p> : null}
// 							<label htmlFor="password">Password</label>
// 						</div>
// 						<div>
// 							<input
// 								type="password"
// 								name="confirmpassword"
// 								id="confirmpassword"
// 								onChange={formik.handleChange}
// 								onBlur={formik.handleBlur}

// 							/>
// 							{(formik.touched.confirmpassword && formik.errors.confirmpassword) ? <p className='errors'>{formik.errors.confirmpassword} </p> : null}
// 							<label htmlFor="password">Confirm Password</label>
// 						</div>
// 						<div className='Button'>
// 							<input type="submit" value='Submit' />
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }



