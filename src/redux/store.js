import { createStore } from "redux"


const initialState = {
	count: 0,
	data: [1,67, 4,56,7,23, 6547,555, 666],
	person: {
		id: 1,
		name: "Hovnatan",
		age: 34
	},
	posts: []
}

function foo(state){
	const result = state.data
	.map(n => n.toString())
	.filter(elem => elem.startsWith("6")).length;
	return { ...state, count: result }

}

function rootReducer(state, action) {
	switch (action.type) {
		case 'add-count': return {...state, count: state.count + 1}
		case 'Age': return {...state, person: {...state.person, age: 20}  }
		case 'find_6': return foo(state)
		default: return state
	}
}

const store = createStore(rootReducer, initialState);
export default store;