import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "./slice/postsSlice"
import commentsReducer from "./slice/commentsSlice"
import usersReducer from "./slice/usersSlice"
import todosReducer from "./slice/todosSlice"




export default configureStore({
	reducer: {
		posts: postsReducer,
        comments: commentsReducer,
        users: usersReducer,
		todos: todosReducer
	},
})
