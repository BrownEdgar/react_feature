import React from 'react'

export default function Users({users}) {
  return (
    <ul>
        {users.map((user => {
            return(
                <li key = {user.id}>
                    <span>{user.registeredDate.format("llll")}</span>
                   <span>{user.name}</span>
                </li>
            )
            }))}

    </ul>
  )
}
