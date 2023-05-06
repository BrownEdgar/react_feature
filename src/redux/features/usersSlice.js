import { GET_USERS } from "./actionTypes";

const initialUsersValue = [];

export default function usersReducer(state = initialUsersValue, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload.users;
    default:
      return state;
  }
}
