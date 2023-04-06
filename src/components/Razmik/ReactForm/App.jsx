import React,{useState} from 'react'
import './App.scss'

let count = 0;

export default function App() {
    const [users,setUsers] = useState([])
    const [notification, setNotification] = useState(false)
    const [error, setError] = useState(false)
        
    const handleSubmit = (e) =>{
        e.preventDefault();
        const {name,email} = e.target
        const user = {
            id: ++count,
            name: name.value,
            email:email.value
        }
        if(users.length === 0 ){
            setUsers([user])
        }else{
            setUsers([...users,user])
        }
        setNotification(true);
        setTimeout(setNotification,2000,false)
        
     }
     const handleBlur = (e)=>{
        const {value:email} = e.target
        const emailExist = users.some(user => user.email.toLowerCase() === email.toLowerCase());
        if(emailExist){
            setError(true)
        }else{
            setError(false)
        }
     }
    return (
    <div className='App'>
        <div className={`alert ${notification?'show':''}`}>
            <p>User Saved Successfily!</p>
        </div>
       <div className='content'>
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus doloremque perferendis illum labore quisquam placeat itaque assumenda odio fuga sint, atque consectetur quod rerum!</p>
        </div> 
       <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Name"></label>
                <input 
                    type="text" 
                    name = 'name' 
                    id = 'name'
                    required 
                    placeholder='Name'/>
            </div>
            <div>
                <label htmlFor="Email"></label>
                <input 
                    type="text" 
                    name = 'email' 
                    id = 'email'
                    required 
                    placeholder='Email'
                    onBlur={handleBlur}
                />
                {error && <p className='error'>This email is allredy exist</p>}
            </div>

            <div>
                <input 
                    type="submit" 
                    value ='Send' />
            </div>
        
        </form>
    </div>
  )
}
