import { createStore } from "redux"

const initialState = {
	count: 0,
	data: ["a", "b", "c"],
	data1: [4, 645, 41, 600, 630],
	person: {
		id: 1,
		name: "Hovnatan",
		age: 34
	},
	posts: []
}

function foo(state){
	const result = state.data1
	.map(n =>n.toString())
	.filter(elem => elem.startsWith('6')).length
	return {...state, count: result }
}

function rootReducer(state, action) {
	switch (action.type) {			
	  case  'add-count': return {...state, count: state.count +1}
	  case  'add-elem': return {
			...state, 
			data:state.data.concat(action.payload.item)}
			case 'add-posts': return {
				...state,
				posts: action.payload.posts
			}
			case 'change-age': return {...state, person: {...state.person, age: 20 } }
			case 'start-6': return foo(state)
		default: return state
	}
}
const store = createStore(rootReducer, initialState);
export default store; 