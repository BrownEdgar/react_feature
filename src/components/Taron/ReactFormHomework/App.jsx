import React, { useState } from 'react'
import "./App.scss"
let count = 0

export default function App() {
    const [users , setUsers] = useState([])
    const [notification , setNotification] = useState(false)
    const [error , setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const { name , email} = e.target

        const user = {
            id: ++count,
            name: name.value,
            email: email.value,
        }
        if(user.lenght === 0){
            setUsers([user])
        }else{
            setUsers([...users, user])
        }
        setNotification(true)
        setTimeout(setNotification , 3000 , false)
        e.target.reset()
    }

    const handleBlur = (e) => { 
		const {value:email} = e.target;
		const emailExist = users.some(user => user.email.toLowerCase() === email.toLowerCase());
		if (emailExist) {
			setError(true)
		}else{
			setError(false)
		}
	}

  return (
    <div>
        <div className='App'>
            <div className={`alert ${notification ? "show" : ''}`}>
                <p>User saved!</p>
            </div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati cupiditate aperiam modi deleniti aut sequi culpa provident doloremque. Odio quibusdam totam atque.</p>
            <input type="text" name="name" id="name" placeholder="Name" required/>
            <input type="text" name="email" id="email" placeholder='Email' required onBlur={handleBlur}/>
            {error && <h4 className='error'>This email alrady exist! Please choose another.</h4>}
            <input type="submit" value="SEND"/>
            </form>
        </div>
    </div>
  )
}