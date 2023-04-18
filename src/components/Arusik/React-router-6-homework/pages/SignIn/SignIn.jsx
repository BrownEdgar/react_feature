import React, { useState }from 'react'
import { Formik, Form, Field } from 'formik'

import './SignIn.scss'

export default function SignIn() {
  const [users , setUsers] = useState([])

  return (
    <div className='Box'>
        <div>
            <h1>Sign In</h1>
        </div>
        <div >
        <Formik>
            <Form >
                <div>
                    <div>
                        <label htmlFor="">Your Email</label>
                        <Field
                        type="email" 
                        name="email" 
                        id="email"           
                        />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <Field
                        type="password" 
                        name="password" 
                        id="password" 
                        />
                    </div>
                
                  </div>
                    <div className='Button'>
                        <button type='submit' className='Btn'>Submit</button>
                    </div>
            </Form>
            </Formik>
        </div>
    </div>
  )
}
