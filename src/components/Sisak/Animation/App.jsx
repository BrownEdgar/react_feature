import React, {useState} from 'react'

import './App.scss'
import classNames from 'classnames'

export default function App() {
    const [active, setActive] = useState(false)
  return (
    <div>
        <h1>Animation in react</h1>
        <hr />
        <div className={classNames('box', {
            actice: active
        })}></div>
        <div className='box'>
            <h2>Animation box</h2>
        </div>
        <hr />
        <button onClick={() => active}>Start</button>
    </div>
  )
}
