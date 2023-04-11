import React from 'react'
import { useFormik , Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from "yup"

import "./App.scss"
const initialValues = {
    username: '',
    password: '',
    email: ''
},

const validationSchema = yup.object({
    username: yup
    .string()
    .min(3)
    .matches(/^[A-Z]/, "username must started with uppercase!")
    .required(),
    password: yup
    .string()
    .matches(/[A-Z]/)
    .required()
    .min(6)
    .max(18)
    .matches(/\d/, "number"),
    email: yup
    .string()
    .required()
    .email()
})

export default function App() {
    const formik = useFormik({
        onSubmit:(values) =>{
            console.log(values)
        },
        validationSchema
        
    })
    // console.log(formik.touched)

  return (
    <div className='App'>
        <form onSubmit={formik.handleSubmit} >
            <div>
                <label htmlFor="username">username</label>
                <input 
                type="text" 
                name="username" 
                id="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                
                 />
                {(formik.touched.username && formik.errors.username) ? <p className='errors'>{formik.errors.username} </p> : null}

            </div>
            <div>
                <label htmlFor="password">password</label>
                <input 
                type="text" 
                name="password" 
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                 />
                 {( formik.touched.password && formik.errors.password) ? <p className='errors'>{formik.errors.password} </p> : null}
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input 
                type="text" 
                name="email" 
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}

                 />
                 {( formik.touched.email && formik.errors.email) ? <p className='errors'>{formik.errors.email} </p> : null}
            </div>
            <div>
                <input type="submit" value='save' />
            </div>
        </form>
    </div>
  )
}
