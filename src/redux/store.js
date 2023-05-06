import {configureStore } from "@reduxjs/toolkit";
import commentsReducer from "./features/commentsSlice";
import postsReducer from "./features/postsSlice";
import todosReducer from "./features/todosSlice";
import usersReducer from "./features/usersSlice";

export default configureStore({
    reducer:{
        posts:postsReducer,
        comments:commentsReducer,
        todos:todosReducer,
        users:usersReducer
    }
    
})

