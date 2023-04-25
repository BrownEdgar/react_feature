import { COUNT_PLUS, COUNT_MINUS, COUNT_NEXTNAME, COUNT_RANDOM, COUNT_COUNT } from './actionTypes'

export const initialState = {
count: 0,
data: [],
person: {
    id: 1,
    name: "reducer"
}
}

export const reducer = (state, action) => {
    // if(action.type === "plus"){
    //     return state + 1
    // }
    // if(action.type === "minus"){
    //     return state - 1
    // }
    // return state

    switch(action.type){
        case COUNT_PLUS: return {...state, count: state.count + 1};
        case COUNT_MINUS: return {...state, count: state.count - 1};
        case COUNT_NEXTNAME: return {...state, person: {...state.person, name: "poxos"}};
        case COUNT_RANDOM: return random(state);
        case COUNT_COUNT: return getMaxValue(state)

        default: return state
    }
}

function random (state){
    const arr = []
    for (let i = 0; i < state.count; i++) {
        arr.push(Math.trunc(Math.random() * 100))
    }
    return {...state , data:arr}
}

function getMaxValue (state){
    const max = Math.max(...state.data)
    return {...state, max:max}
}