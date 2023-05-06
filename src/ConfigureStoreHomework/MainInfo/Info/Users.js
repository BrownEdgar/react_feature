import { ADD_USERS } from "./actionTypes";

const initialUsersValue = []

export default function usersReducer(state = initialUsersValue, action) {
    switch (action.type) {
        case ADD_USERS:
          return {
            ...state,
            comments: action.payload.users,
          };
        default:
          return state;
      }
    
}