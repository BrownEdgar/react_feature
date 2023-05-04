import { CHANGE_COUNT } from "./actionTypes"

const initialCountValue = 0 

export default function countReducer(state = initialCountValue, action) {
    switch (action.type) {
        case CHANGE_COUNT : return state + 1
        
    
        default: return state
    }
}