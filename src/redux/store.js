import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/countSlice";
import dataReducer from "./features/dataSlice";
import personReducer from "./features/personSlice";
import postsReducer from "./features/postsSlice";
import todosReducer from "./features/todoSlice";
import { ADD_COUNT, ADD_TODO } from "./features/actionTypes";

const myFirstMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_TODO) {
    const isExists = store.getState().todos.includes(action.payload.message);
    if (!isExists) {
      return next(action);
    }else{
      store.dispatch({type: ADD_COUNT})
    }
    
  }else{
    return next(action)
  }
};

const myFirstMiddleware2 = (store) => (next) => (action) => {
  console.log("myFirstMiddleware2");
  return next(action);
};

export default configureStore({
  reducer: {
    count: countReducer,
    data: dataReducer,
    person: personReducer,
    posts: postsReducer,
    todos: todosReducer,
  },
  middleware: [myFirstMiddleware, myFirstMiddleware2],
});
