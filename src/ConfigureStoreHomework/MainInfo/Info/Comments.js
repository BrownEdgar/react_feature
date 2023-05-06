import { ADD_COMMETNS } from "./ActionTypes";

const initialCommentsValue = [];

export default function commentsReducer(state = initialCommentsValue, action) {
  switch (action.type) {
    case ADD_COMMETNS:
      return { ...state, comments: action.payload.comments };

    default:
      return state;
  }
}
