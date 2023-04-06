import React from 'react'
import "./App.scss"

export default function App() {
  return (
    <div className='App'>
        <form>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" />
            </div>
            <div>
                <input type="submit" value="save" />
            </div>
        </form>
    </div>
  )
}
