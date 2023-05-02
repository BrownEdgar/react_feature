import { createStore } from "redux"

const initialState = {
    count:0,
    data:[1,42,63,555,36,643],
    person:{
        id:1,
        name:'hovnatan',
        age:30
    },
    posts:[]
}
function foo(state){
 const result = state.data.map(n => n.toString())
 .filter(elem=>elem.startsWith('6')).length;
 return {...state,count:result}
}
function rootReducer(state,action){
    switch(action.type){
        case 'add-count':return {...state,count:state.count + 1};
        case 'add-d': return {...state,data:state.data.concat(action.payload.item)}
        case 'add-posts':return {
            ...state,
            posts:action.payload.posts
        }
        case 'change-age':return{...state,person:{...state.person,age:action.payload.age}}
        case 'find-six':return foo(state)
        default:return state
    }
}

const store = createStore(rootReducer,initialState);
export default store;