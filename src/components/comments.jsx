import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/features/actionTypes'
import { useEffect } from 'react'

export default function Comments() {
    const comments = useSelector(state =>state.comments)
    const dispatch = useDispatch()
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments?_limit=4')
            .then(response =>dispatch({
                type:ACTIONS.ADD_COMMENTS,
                payload:{
                    comments:response.data
                }
            }))
    },[])
  
return (
    <div>
        <h1>Comments</h1>
       <pre>{JSON.stringify(comments,null,1)}</pre>
    </div>
  )
}
