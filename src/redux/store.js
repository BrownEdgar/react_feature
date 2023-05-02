import { createStore } from 'redux'

const initialState = {
    count: 0,
    data: [45,888,674,58,61,8],
    person:{
        id:1,
        name:"Hovnatan",
        age:34
    },
    posts: []
}

function find(state){
    const result = state.data
    .map(n=>n.toString())
    .filter(elem => elem.startsWith("6")).length;
    return {...state , count : result}
}

function rootReducer(state,action){
    switch (action.type) {
     case 'add-count': return {...state , count: state.count + 1}
     case 'add-element': return {...state , data: [...state.data , action.payload.item]}
     case "add-posts": return {...state, posts: action.payload.posts }
     case 'change-age': return {...state, person: {...state.person , age : action.payload.age }}
     case "find-6": return find(state)
        default: return state



    }
}


const store = createStore(rootReducer,initialState)
export default store;