import { createStore } from "redux"

const initialState = {
    count:0,
    data:["Reactjs","javascript","sass"],
    person:{
        id:1,
        name:'hovnatan',
        age:30
    },
    posts:[]
}
function rootReducer(state,action){
    switch(action.type){
        case 'add-count':return {...state,count:state.count + 1};
        case 'add-angular': return {...state,data:state.data.concat(action.payload.item)}
        case 'add-posts':return {
            ...state,
            posts:action.payload.posts
        }
        case 'change-age':return{...state,person:{...state.person,age:action.payload.age}}
        default:return state
    }
}

const store = createStore(rootReducer,initialState);
export default store;