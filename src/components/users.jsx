import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/features/actionTypes'
import { useEffect } from 'react'

export default function Users() {
    const users = useSelector(state =>state.users)
    const dispatch = useDispatch()
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=4')
            .then(response =>dispatch({
                type:ACTIONS.ADD_USERS,
                payload:{
                    users:response.data
                }
            }))
    },[])
  
return (
    <div>
        <h1>Users</h1>
       <pre>{JSON.stringify(users,null,1)}</pre>
    </div>
  )
}