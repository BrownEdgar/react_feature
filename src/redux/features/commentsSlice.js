import {ACTIONS} from "./actionTypes";

const initialCommentsValue = [];

export default function commentsReducer(state = initialCommentsValue,action){
    switch(action.type){
        case ACTIONS.ADD_COMMENTS:return action.payload.comments

        default: return state;
    }
    
}