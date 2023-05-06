import { ACTIONS } from "./actionTypes";

const initialUsersValue = [];

export default function usersReducer(state = initialUsersValue,action){
    switch(action.type){
        case ACTIONS.ADD_USERS: return action.payload.users

        default: return state;
    }
}