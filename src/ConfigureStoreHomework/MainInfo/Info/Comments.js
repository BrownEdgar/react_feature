import { ADD_COMMENTS } from "./actionTypes";

const initialCommentsValue = []

export default function commentsReducer(state = initialCommentsValue, action) {
    switch (action.type) {
        case ADD_COMMENTS:
          return {
            ...state,
            comments: action.payload.comments,
          };
        default:
          return state;
      }
    
}