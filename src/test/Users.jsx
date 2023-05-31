import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

import './App.scss'

export default function Users({users}) {
  const [value, setValue] = useState()
  const filterChange = (e) => {
    setValue(e.target.value)
  }
  const filterUsers = useMemo(() =>{
    return value ? users.filter((user) =>user.langueges === value): users ;
  },
   [users,value]) 

  return (<div className='main-user'>
            <select className='user-select' onChange={filterChange} name='langueges' id='langueges' >
                <option value='' selected disabled></option>
                <option value='htmlcss'>Html & Css</option>
                <option value='javascript'>Javascript</option>
                <option value='react'>React</option>
                <option value='typescript'>Typescript</option>
                <option value='python'>Python</option>
            </select>
      <ul className='main-list'>
        {filterUsers
          .map((user => {
            return(
                <li key = {user.id} className={`item-${user.langueges}`}>
                    <span>{user.registeredDate.format("llll")}</span>
                   <span>{user.name}</span>
                   <span>{user.langueges}</span>
                </li>
            )
            }))
            }
    </ul>
    </div>
  )
}
