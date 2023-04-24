import React from 'react'
import { useState } from 'react'
import Component from './Component'
export const MyContext = React.createContext('a')

export default function App() {
    const [value, setValue] = useState(" hook")

  return (
    <div>
        <h2>App</h2>
        <MyContext.Provider value={{value }}>
            <Component />
        </MyContext.Provider>
    </div>
  )
}
