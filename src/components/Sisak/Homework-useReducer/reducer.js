import { UPLOAD_TODOS } from "./actionTypes";

export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export const reducer = (state, action) => {
	switch (action.type) {
		case UPLOAD_TODOS:
			return {...state, todos: action.payload.todos}
		default:
			return state
	}
}