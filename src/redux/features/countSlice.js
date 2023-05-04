import { ADD_COUNT } from './actionTypes.js'
const initialCountValue = 0;

export default function countReducer(state = initialCountValue , action) {
    switch (action.type) {
        case ADD_COUNT: return state + 1
            
        default: return state;
    }
}