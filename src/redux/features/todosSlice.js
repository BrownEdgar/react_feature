import { ACTIONS } from "./actionTypes";

const initialTodosValue = [];

export default function todosReducer(state = initialTodosValue,action){
    switch(action.type){
        case ACTIONS.ADD_TODOS: return action.payload.todos

        default: return state;
    }
}