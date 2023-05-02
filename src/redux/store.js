import { createStore } from "redux"


const initialState = {
	count: 0,
	data:["a","b","c"],
	person: {
		id: 1,
		name: "Hovnatan",
		age: 34
	}
}

function rootReducer(state,action) {
	switch (action.type) {
	case "add count": return {...state, count: state.count + 1}
	case "add-elem": return {
		...state,
		data: state.data.concat(action.payload.item)}
		case "add-posts": 
		default: return state
	}
}

const store = createStore(rootReducer, initialState)
export default store;