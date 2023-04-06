import React,{useState} from 'react'
import './App.scss'

export default function App() {
    const [formData,setFormData] = useState({
        username:""
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
        const {username} = e.target
     }
     const handleChange = ()=>{
        setFormData({username:e.target.value});
     }
  return (
    <div>
        <form>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" name = 'username' id = 'username' onChange={handleChange}/>
            </div>
            <div>
                <input type="submit" name = 'save' />
            </div>
        </form>
    </div>
  )
}
