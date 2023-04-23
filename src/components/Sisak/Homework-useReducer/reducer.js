import { UPLOAD_POSTS } from "./actionTypes";

export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POSTS":
      return { ...state, posts: action.payload, actions: state.actions + 1 };
    case "ADD_DEVELOPER":
      return {
        ...state,
        developers: [...state.developers, action.payload],
        actions: state.actions + 1,
      };
    case "SORT_ARR":
      return {
        ...state,
        arr: [...state.arr.sort((a, b) => a - b)],
        actions: state.actions + 1,
      };
    case "UPDATE_POSTS":
      return {
        ...state,
        posts: state.posts.map((post, index) => ({
          ...post,
          id: state.arr[index],
        })),
        arr: [],
        actions: state.actions + 1,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post, index) => index !== action.payload),
        actions: state.actions + 1,
      };
    default:
      return state;
  }
};
