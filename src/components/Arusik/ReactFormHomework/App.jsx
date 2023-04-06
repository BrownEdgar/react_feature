import React, {useState} from 'react'
import "./App.scss"

let count = 0


export default function App() {
    const [users , setUsers] = useState([])
    const [notification , setNotification] = useState(false)


        const handleSubmit = (e) =>{
            e.preventDefault();
            const { name , email} = e.target

        const user = {
            id: ++count,
            name: name.value,
            email: email.value,
        }
        if(user.length === 0){
            setUsers([user])
        } else{
            setUsers(...users,user)
        }
        setNotification(true)
        setTimeout(setNotification , 3000 , false)
        e.target.reset()
        }
        
  return (
    <div className='App'>
        <div className={`alert ${notification ? "show" : ''}`}>
            <p>User saved!</p>
        </div>

            <h2>Contact us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Magnam enim voluptatum nobis odio nisi vitae!</p>
            <form onSubmit={handleSubmit}>

            <div>
            <input 
                type="text" 
                name='name' 
                id='name'
                placeholder='Name'
                required/>
            <input 
                type="email" 
                name='email' 
                id='email' 
                placeholder='Email'
                required/>

            <input type="submit" value="Send"  />
            </div>
            </form>
    </div>
  )
}
