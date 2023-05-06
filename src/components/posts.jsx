import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../redux/features/actionTypes'
import { useEffect } from 'react'

export default function Posts() {
    const posts = useSelector(state =>state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4')
            .then(response =>dispatch({
                type:ACTIONS.ADD_POSTS,
                payload:{
                    posts:response.data
                }
            }))
    },[])
  
return (
    <div>
        <h1>Posts</h1>
       <pre>{JSON.stringify(posts,null,1)}</pre>
    </div>
  )
}
