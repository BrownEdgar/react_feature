import React, { useContext } from 'react'
import { MyContext } from './App'

export default function Child() {

    const data = useContext(MyContext)
  return (
    <div>
        <h2>value:{data.value}</h2>
        <button>Change value</button>
    </div>
  )
}
