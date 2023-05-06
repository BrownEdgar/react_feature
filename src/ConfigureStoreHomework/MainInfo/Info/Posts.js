import { ADD_POSTS } from "./actionTypes";

const initialPostsValue = [];

export default function postsReducer(state = initialPostsValue, action) {
  switch (action.type) {
    case ADD_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    default:
      return state;
  }
}