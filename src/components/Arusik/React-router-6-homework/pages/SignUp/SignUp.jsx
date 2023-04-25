import React, { useState} from 'react'
import { Formik, Form, Field } from 'formik'

import './SignUp.scss'

export default function SignUp() {
  const [users , setUsers] = useState([])

  return (
    <div>
        <div>
          <h1>Sign Up</h1>
        </div>
        <div>
        <Formik 
            initialValues={{ firstName: '', lastName: '', email: '', website: '', message: '' }}
            onSubmit={(values, {resetForm}) => {
                setUsers([...users, values])
                resetForm()
            }}
            >
            <Form >
                <div>
                    <div>
                        <label htmlFor="">First Name</label>
                        <Field
                        type="text" 
                        name="firstName" 
                        id="firstName"           
                        />
                    </div>
                    <div>
                        <label htmlFor="">Last Name</label>
                        <Field
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Your Email</label>
                        <Field 
                        type="text" 
                        name="email" 
                        id="email"         
                />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <Field
                        type="text" 
                        name="website" 
                        id="website"               
                />
                    </div>
                </div>
                <div >
                    <label htmlFor="">Confirm Password</label>
                    <Field 
                    type="text" 
                    name="message" 
                    id="message"                 
                     />
                </div>
                    
                    <div className='submit'>
                        <button type='submit' className='Btn'>Submit</button>
                    </div>
            </Form>
            </Formik>
        </div>
    </div>
  )
}
