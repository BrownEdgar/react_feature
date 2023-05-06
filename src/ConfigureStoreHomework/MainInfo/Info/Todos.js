import { ADD_TODOS } from "./actionTypes";

const initialTodosValue = []

export default function todosReducer(state = initialTodosValue, action) {
    switch (action.type) {
        case ADD_TODOS:
          return {
            ...state,
            todos: action.payload.todos,
          };
        default:
          return state;
      }
    
}