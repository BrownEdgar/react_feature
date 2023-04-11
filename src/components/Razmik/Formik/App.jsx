import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './App.scss'

const initialValues ={ username: '', email: '', password:'', confirmPassword:'' }
const validationSchema = Yup.object({
    username: Yup.string()
      .min(3)
      .max(15)
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string().min(6).max(18).required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  })
  
  export default function App() {
    const [users, setUsers] = useState([])
    const handleSubmit = (values,{resetForm}) =>{
    setUsers([...users,values])
    console.log(values)
    resetForm()
  }

return (
    <div className='container'>
            <div className='content'>
                <h1>HTML CSS</h1>
                <h1>Registration</h1>
                <h1>Form</h1>
                <h1>Tamplate</h1>
                <h2>Join Us</h2>
            </div>
        <div className='form'>
                <Formik className = 'formik' 
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange= {false}
                    validateOnBlur  = {true} 
                >
             <Form>
                <Field
                    type = "text" 
                    name = 'username' 
                    id = 'username'
                    placeholder='Add Username'
                    /> 
                    <label htmlFor="username">UserName</label>
                    <ErrorMessage name = "username" component={"p"}/> 
                <Field
                    type = "text" 
                    name = 'email' 
                    id = 'email'
                    placeholder='Youe Email'
                    /> 
                    <label htmlFor="Email">Email</label>
                    <ErrorMessage name = "email" component={"p"}/> 
                <Field
                    type = "password" 
                    name = 'password' 
                    id = 'password'
                    placeholder='********'
                    />
                    <label htmlFor="password">Password</label>
                    <ErrorMessage name = "password" component={"p"}/> 
                <Field
                    type = "password" 
                    name = 'confirmPassword' 
                    id = 'confirmPassword'
                    placeholder='********'
                    /> 
                    <label htmlFor="password">Confirm Password</label>
                    <ErrorMessage name = "confirmPassword" component={"p"}/> 
                    <button type = 'submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    </div>
  )}

