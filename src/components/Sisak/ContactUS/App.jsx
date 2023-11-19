import React,{useState} from 'react'
import "./App.scss"
let count  = 0

export default function App() {
const [users, setUsers] = useState([])
const [alert, setalert] = useState(false)
const [error, setError] = useState(false)
const handelSubmit =(e)=>{
  e.preventDefault()
  const {name ,email} =e.target;

const user ={
  id: ++count,
  name: name.value,
  email: email.value
}
setUsers([...users,user])
setalert(true)
setTimeout(setalert, 3000,false);
   e.target.reset()
}
const handelBlur = (e)=>{
  const {value:email} = e.target
  const emailExist = users.some(user =>user.email.toLowerCase()===email.toLowerCase() )
  if(emailExist){
    setError(true)
  }else{
    setError(false)

  }
}
  return (
    <div className='App'> 
    <div className={`alert ${alert ? 'show' : ''}`} >
      <p>" A customer service representative from Poghosyan will contact you shortly.</p>
    </div>
       <form onSubmit={handelSubmit}>
       <div>
       <h1>Contact Us</h1>
        <h2>If you have any problem or question related to our services and their quality, you use our online help service, send us an e-mail at Poghosyansisak@gmail.com , visit any JS service center and get in touch with us on our Facebook page. </h2>

        <input type="text"  name="name" id="name" defaultValue='Name' required/>
        <input type="email"  name='email' id='email' defaultValue='Email' onBlur={handelBlur} required/>
        <input type="submit" value="Send" />
       </div>
        {error && <p className='error'>This email alredy exist</p> }
       </form>
    </div>
  )
}
