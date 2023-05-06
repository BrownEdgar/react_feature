import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import commentsReducer from './Info/Comments'
import postsReducer from './Info/Posts'
import todosReducer from './Info/Todos'
import usersReducer from './Info/Users'

export default configureStore({
    reducer: {
        comments: commentsReducer,
        posts: postsReducer,
        todos: todosReducer,
        users: usersReducer
    }
})
