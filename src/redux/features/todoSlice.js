import { ADD_TODO } from "./actionTypes";

const initialTodosValue = [];

export default function todosReducer(state = initialTodosValue, action) {
	switch (action.type) {
	case  ADD_TODO: return [...state, action.payload.message]

		default: return state;

	}
	
}