import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/postsSlice";
import usersReducer from "./features/usersSlice";
import todoesReducer from "./features/todosSlice";
import commentsReducer from "./features/commentsSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
    todos: todoesReducer,
    comments: commentsReducer,
  },
});
