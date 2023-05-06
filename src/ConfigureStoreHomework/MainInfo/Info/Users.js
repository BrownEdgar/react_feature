import { ADD_USERS } from "./ActionTypes";

const initialUsersValue = [];

export default function usersReducer(state = initialUsersValue, action) {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, users: action.payload.users };

    default:
      return state;
  }
}
