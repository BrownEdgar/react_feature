import {GET_POSTS,ADD_DEV_NAME,SORT_ARR,CHANGE_ID,DELETE_POST} from './actionTypes'

export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export const reducer = (state , action) =>{
    switch(action.type){
        case GET_POSTS: return { ...state , posts: action.payload.posts, actions: state.actions + 1 };
        case ADD_DEV_NAME: return { ...state, developers: [...state.developers, action.payload], actions: state.actions + 1 };
        case SORT_ARR: return {...sortArr(state), actions: state.actions + 1 };
    }
}
  
function sortArr (state){
    initialState.arr.sort((a,b) => a-b)
    return {...state}
}