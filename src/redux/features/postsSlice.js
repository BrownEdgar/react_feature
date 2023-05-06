import { GET_POSTS } from "./actionTypes";

const initialPostsValue = [];

export default function postReducer(state = initialPostsValue, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload.posts;
    default:
      return state;
  }
}
