import React from 'react'
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
  .required()
})


export default function App() {
const formik = useFormik({
  initialValues : {
    username:"",
    password:"",
    email:""
  },
  onSubmit:(values)=>{
    console.log(values);
  },
  validationSchema
})
// console.log(formik.touched);


  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <div>
            <label htmlFor="username">username</label>
            <input 
              type="text" 
              name='username'
              id='username' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
              {(formik.touched.username && formik.errors.username)? <p className='errors'>{formik.errors.username}</p>:null}
            </div>
            <div>
            <label htmlFor="password">password</label>
            <input 
              type="text"  
              name='password'
              id='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {( formik.touched.password  && formik.errors.password)? <p className='errors'>{formik.errors.password}</p>:null}

            </div>
            <div>
            <label htmlFor="email">email</label>
            <input 
              type="email"  
              name='email'
              id='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
              {( formik.touched.email  && formik.errors.email)? <p className='errors'>{formik.errors.email}</p>:null}

            </div>
            <div>
              <input type="submit" value="save" />
            </div>
        </form>
    </div>
  )
}
