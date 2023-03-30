import React, { useState } from 'react'
import cake from './photo1.jpg'

export default function App() {
    const [url,setUrl] = useState('https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')

  return (
    <div>
        {/* variant 1 */}
        {/* <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
         alt="cake" /> */}
        {/* variant 2 */}
         {/* <img src={url} alt="cake" /> */}
        {/* variant 3 */}
         {/* <img src={cake} alt="" /> */}
        {/* variant 4 */}
         {/* <img src="./images/photo1.jpg" alt="" /> */}

    </div>
  )
}
