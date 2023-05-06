import { GET_TODOS } from "./actionTypes";
const initialTodoesValue = [];

export default function todoesReducer(state = initialTodoesValue, action) {
  switch (action.type) {
    case GET_TODOS:
      return action.payload.todos;
    default:
      return state;
  }
}
