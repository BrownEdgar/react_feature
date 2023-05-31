import React from 'react'

export default function App () {
    const [value, setValue] = useState(false)
    const handleClick = () =>{
        setValue(true)
    }

  return (
    <div className = 'buttons'>
        <button className={classNames()} onClick={handleClick}>btn-1</button>
        <button onClick={handleClick}>btn-2</button>
        <button onClick={handleClick}>btn-3</button>
        <button onClick={handleClick}>btn-4</button>
        <button onClick={handleClick}>btn-5</button>
    </div>
  )
}
