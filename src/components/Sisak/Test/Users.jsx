import React from 'react'

export default function Users({users}) {
  return (
    <ul>
        {
            users.map((user) => {
                <li key={user.id}>
                    <span>{user.registeredData.format('hh: mm')}</span>
                    <span>{user.name}</span>
                </li>
            })
        }
    </ul>
  )
}
