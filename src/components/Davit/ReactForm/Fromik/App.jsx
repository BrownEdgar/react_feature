import React  from 'react'
import "./App.scss"
import {useFormik} from 'formik'
import * as yup from "yup"

const validationSchema = yup.object({
  username : yup
  .string()
  .min(6)
  .matches(/^[A-Z]/ , "username must started with UpperCase!")
  .required(),
  password: yup
  .string()
  .matches(/[A-Z]/)
  .min(8)
  .max(14)
  .required()
  .matches(/\d/ ,"password must include number"),
  email : yup
  .string()
  .email()
  .required(),
  confirmPwd: yup.string()
  .required()
  .oneOf([yup.ref('password')], 'Passwords does not match'),
  
})


export default function App() {

const formik = useFormik({
  initialValues : {
    username:"",
    password:"",
    email:"",
    confirmPwd: ""
    
  },
  onSubmit:(values, {resetForm})=>{
		resetForm()
	console.log(values)
  },
  validationSchema
})

  return (
  <div className='App'>
      <div className='firstPart'>
        <h2 className='content1'>
        HTML CSS <nav></nav> 
        Registration  <nav></nav>
        Form <nav></nav>
        Template   </h2>
        <h2 className="content2">JOIN US</h2>
      </div>
    <div className='secondPart'>
    <form onSubmit={formik.handleSubmit}>
     <div>
         <input 
         placeholder='Username'
              type="text" 
              name='username'
              id='username' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
              {(formik.touched.username && formik.errors.username)? <p className='errors'>{formik.errors.username}</p>:null}
      </div>
        <div>
            <input 
         placeholder='Email'
              type="email"  
              name='email'
              id='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {( formik.touched.email  && formik.errors.email)? <p className='errors'>{formik.errors.email}</p>:null}

        </div>
            <div>
            <input 
         placeholder='Password'
              type="text"  
              name='password'
              id='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {( formik.touched.password  && formik.errors.password)? <p className='errors'>{formik.errors.password}</p>:null}

            </div>
            <div>
            <input 
         placeholder='Confirm Password'

              type="text"  
              name='confirmPwd'
              id='confirmPwd'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {( formik.touched.confirmPwd  && formik.errors.confirmPwd)? <p className='errors'>{formik.errors.confirmPwd}</p>:null}

            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
  </div>
  )
}
