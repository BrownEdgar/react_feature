import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./Info/Posts";
import commentsReducer from "./Info/Comments";
import todosReducer from "./Info/Todos";
import usersReducer from "./Info/Users";

export default configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    todos: todosReducer,
    users: usersReducer,
  },
});
