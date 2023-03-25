import React , { useState } from 'react'

export default function App() {
  const [url, setUrl] = useState("https://images.unsplash.com/photo-1663860705042-2de106ec7aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")
  return (
    <div>
      {/* variant 1 */}
      {/* <img src="https://images.unsplash.com/photo-1663860705042-2de106ec7aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" /> */}
      {/* variant 2 */}
      <img src={url} alt="" />
    
    </div>
  )
}
