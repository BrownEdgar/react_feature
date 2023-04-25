import React from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Baskets from './pages/Baskets'
import Posts from './pages/Posts'
import Layouts from './pages/Layouts'


export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layouts />}>
                <Route index element={<Posts />}/>
                <Route path="/basket" element={<Baskets />}/>
            </Route>
        )
    )
  return (
    <div className='App'>    
        <RouterProvider router={router} />
    </div>
  )
}

