import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import ROUTES from "../../routes/ROUTES"

import './sign_up.scss'
let count = 0

const initialValues={ username: '', email: '', password: '', confirmpassword: ''}

const validationSchema = yup.object({
    email: yup
    .string()
    .required()
    .email(),
    password: yup
    .string()
    .matches(/[A-Z]/)
    .min(5)
    .max(18)
    .matches(/\d/, "number")
    .required(),
    confirmpassword: yup 
    .string()
    .test('passwords-match', 'Passwords must match', function(value) {
        return this.parent.password === value;
    })
})

export default function App() {
    const [users , setUsers] = useState([])
    const navigate = useNavigate()
    const handleSubmit=(values, {resetForm}) => {
        const user = {id: ++count, ...values}
        setUsers([...users, user])
        resetForm()
        localStorage.setItem("user" , JSON.stringify(user))
        navigate(ROUTES.SIGNIN)
    }
    
	return (
        <div className='App'>
            <div>
                <h1>Sign Up Page</h1>
            </div>
            <div>
            <Formik 
                onSubmit={handleSubmit}
                validateOnBlur = {false}
                validateOnChange = {true}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
            <Form className='Box'>
                <div>
                    <div>
                        <label htmlFor="">Username</label>
                        <Field type="text"  name="username"  class="text"/>
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <Field type="text" name="email" class="text" />
                        <ErrorMessage name="email" component={"p"}/>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <Field type="password"  name="password"  class="text"/>
                        <ErrorMessage name="password" component={"p"}/>
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password</label>
                        <Field type="password"  name="confirmpassword"  class="text"/>
                        <ErrorMessage name="confirmpassword" component={"p"}/>
                    </div>
                </div>
                    <button type='Submit' className='Submit'>SUBMIT</button>
            </Form>
            </Formik>
        </div>
		</div>
	)
}