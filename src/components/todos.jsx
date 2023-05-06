import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/features/actionTypes'
import { useEffect } from 'react'

export default function Todos() {
    const todos = useSelector(state =>state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
            .then(response =>dispatch({
                type:ACTIONS.ADD_TODOS,
                payload:{
                    todos:response.data
                }
            }))
    },[])
  
return (
    <div>
        <h1>Todos</h1>
       <pre>{JSON.stringify(todos,null,1)}</pre>
    </div>
  )
}