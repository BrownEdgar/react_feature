import { CHANGE_NAME, COUNT_MINUS, COUNT_PLUS, GET_MAX, RANDOM_ARR,ULOAD_TODOS } from "./actionTypes";

export const initialState = {
	count: 0,
	data: [],
	person: {
		id: 1,
		name: "reducer"
	}
}

export const reducer = (state, action) => {
	switch (action.type) {
		case COUNT_PLUS:
			return { ...state, count: state.count + action.payload.count };
		case COUNT_MINUS:
			return { ...state, count: state.count - 1 };
		case CHANGE_NAME:
			return { ...state, person: { ...state.person, name: action.payload.name} };
		case RANDOM_ARR:
			return random(state);
		case GET_MAX:
			return getMaxValue(state)
		case ULOAD_TODOS:
			return {...state, todos: action.payload}
		default:
			return state
	}
}

function random(state) {
	const arr = []
	for (let i = 0; i < state.count; i++) {
		arr.push(Math.trunc(Math.random() * 100))
	}
	return { ...state, data: arr }
}


function getMaxValue(state) {
	const max = Math.max(...state.data)
	return { ...state, max: max }
}