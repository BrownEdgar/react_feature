import React,{useEffect, useState} from 'react';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/ROUTES';

import './SignIn.scss'

const initialValues = {email: '', password:''}
const validationSchema = Yup.object({
    email:Yup.string() 
      .email('Invalid email address')
      .required('Required'),
    password:Yup.string()
      .min(6)
      .max(16)
      .required('Required')
})

export default function SignIn() {
    const [state, setState] = useState({})
    const [login, setLogin] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{  
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          setState(user);
        }
    },[])
    const handleSubmit = async (values,{resetForm}) =>{
        setLogin([...login,values]) 
        console.log(state)
        if(values.email === state.email && values.password === state.password){
             navigate(ROUTES.HOME)
        }
        resetForm()
        }
    
    return (
    <div className='container'>
        <div className='content'>
            <h1>Sign In</h1>
        <div className='form'>
                <Formik 
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    validateOnChange = {false}
                    validateOnBlur  = {true} 
                    >
                <Form>
                <div>
                    <Field type = "text" name = 'email' id = 'email' placeholder = 'Your Email'/> 
                    <ErrorMessage name = "email" component={"p"}/>
                    <Field type = "password" name = 'password' id = 'password' placeholder = 'Password'/> 
                    <ErrorMessage name = "password" component={"p"}/>
                    <button type = 'submit'>Login</button>
                </div>
                </Form>
                </Formik>
            </div>
        </div>
    </div>
  )
}

