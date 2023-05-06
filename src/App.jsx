import React from 'react'
import Comments from './components/comments'
import Todos from './components/todos'
import Posts from './components/posts'
import Users from './components/users'

export default function App() {
  return (
    <div>
      <Posts/>
      <Comments/>
      <Todos/>
      <Users/>
    </div>
  )
}
