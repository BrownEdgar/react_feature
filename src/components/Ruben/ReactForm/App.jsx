import React, { useState } from 'react'

import "./App.scss"
let count = 0;
export default function App() {
const [users, setUsers] = useState ([])
const [notification, SetNotification] = useState(false)
const [error, SetError] = useState(false)


  const handleSubmit = (e) => { 
    e.preventDefault()
    const { username, Name, Email } = e.target;

    const user = {
        id: ++count,
        username: username.value,
        Name: Name.value,
        Email: Email.value,
    }

    if (users.length === 0) {
        setUsers([user])
    }else{
        setUsers([...users, user])
    }
    

    setNotification(true),
    setTimeout(SetNotification, 3000, false),
    e.target.reset();//karoxa jnjvi

  }

  const handleBlur = (e) => { 
    const {value:email} = e.target;
    const emailExist = users.some(user => user.email.toLowerCase() === email.toLowerCase());
    if(emailExist) {
        SetError(true)
    }else{
        SetError(false)
    }
  }
  return (
    <div className='App'>
        <div className={`alert ${notification ? "show" : ''}`}>
            <p>User saved successfully</p>
        </div>
        <h1 className='p'>Contsact Us</h1>
        <p className='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil?</p>
        <form onSubmit={handleSubmit}>
            <div className='div-1'>
                <label htmlFor="username">Name</label>
                <input type="text"  name='username' id='username' required
                onBlur={handleBlur}
                />
                {error && <p className='error'>this email alredy exist</p>}
            </div>
            <div className='div-1'>
                <label htmlFor="username">Email</label>
                <input type="text"  name='username' id='username' required/>
            </div>
            <div>
                <input className='input' type="submit" value="SEND" />
            </div>
            

        </form>


    </div>
  )
}
