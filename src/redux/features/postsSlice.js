import { ACTIONS } from "./actionTypes";

const initialPostsValue = [];

export default function postsReducer(state = initialPostsValue,action){
    switch(action.type){
        case ACTIONS.ADD_POSTS: return action.payload.posts

        default: return state;
    }
}