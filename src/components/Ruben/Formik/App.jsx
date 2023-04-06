import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

import "./App.scss"

const validationSchema = yup.object({
  username: yup.string()
    .min(3)
    .matches(/^[A-Z]/, "username must started with uppercase!")
    .required(),
  username: yup.string()
})


export default function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema

  })
  return (
    <div>
      <form>
        <div className='App'>
          <lable htmlFor="username">username</lable>
          <input type="text"
            name="username"
            id="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {(formik.touched.username && formik.errors.username)? <p className='errors'>{formik.errors.username} </p> : null}

        </div>
      
        <div>
          <lable htmlFor="password">password</lable>
          <input type="text"
            name="password"
            id="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {(formik.touched.password && formik.errors.password)? <p className='errors'>{formik.errors.password} </p> : null}

        </div>
        <div>
          <input type="submit" value="save" />
          
        </div>
      </form>
    </div>
  )
}
