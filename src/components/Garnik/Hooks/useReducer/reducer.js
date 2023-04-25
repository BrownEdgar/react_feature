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
	case "plus": return {...state, count:state.count + 1 };
	case "minus": return { ...state, count: state.count - 1 };
	case "changeName": return { ...state, person: state.name };

	default: return state
		
}

}