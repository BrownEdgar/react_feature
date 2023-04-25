import ACTIONS from './actionTypes'

export const initialState ={
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
  }
export const reducer = (state,action) =>{
    switch(action.type){
        case ACTIONS.SORT_ARR:return Sortarr(state);
        case ACTIONS.ADD_NAME:
            if(action.payload.name.length > 0){
                return {...state,developers: [...state.developers,action.payload.name],actions:state.actions+1};
            }
            else{
                return{...state}
            }
        case ACTIONS.UPLOAD_POSTS:return{...state,posts:action.payload.posts};
        case ACTIONS.DELETE_POST:
            const newPosts = state.posts.filter(post => post.id !== action.payload.userId)
            return {...state, posts: newPosts,actions:state.actions + 1};
        case ACTIONS.CHANGE_POSTS:return ChangePost(state);
        default:
            return state;
    }
}
function Sortarr(state){
    const arr1 = state.arr.sort(function(a, b){return a-b});
    console.log(arr1)
    return {...state,arr:arr1,actions:state.actions+1}
}
function ChangePost(state){
    for(let i = 0; i < state.posts.length;i++){
        state.posts[i].id = state.arr[i]
    }
    return {...state,actions:state.actions+1}
}



