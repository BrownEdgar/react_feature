import React ,{useState} from 'react'
import { HTML, Javascript, React_js, Typescript, Python } from './Colors/colors'

export default function Sort({users}) {
const [name, setName] = useState(true)
const [date, setDate] = useState(true)
const [email, setEmail] = useState(true)
const [user, setUser] = useState([])
const [color, setColor] = useState('')



const handleChange=(data)=>{
if (data=='name' ) {
if (name) {
const sorrtByName = users.sort((a,b) => a.name > b.name ? 1 : -1 )
setUser(sorrtByName)
}
setName(!name)
}
if (data=='date' ) {
if (date) {
const sortByDate = users.sort((a,b) => a.registeredDate > b.registeredDate ? 1 : -1 )
setUser(sortByDate)
}
setDate(!date)
}
if (data=='email' ) {
if (email) {
const sortbyEmail = users.sort((a,b) => a.email > b.email ? 1 : -1 )
setUser(sortbyEmail)
}
setEmail(!email)
}
}

return (
<>
    <div className="select">
        <h3>Filter</h3>
        <input type="checkbox" value={name} onChange={()=>handleChange("name")}/> By Name
        <input type="checkbox" value={date} onChange={()=>handleChange("date")}/> By Date
        <input type="checkbox" value={email} onChange={()=>handleChange("email")}/> By Email
        <ul className='main-list-sorted'>
            {
            user.map((user) => {
            return (
            <li  key={user.id}>
                <span className='date'>at {user.registeredDate.calendar()}</span>
                <span>{user.name} | {user.languages} | {user.email}</span>
            </li>
            )
            })
            }
        </ul>
    </div>
</>
)
}

