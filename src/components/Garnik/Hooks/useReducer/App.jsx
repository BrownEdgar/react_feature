import React, {useReducer} from 'react'
import { initialState, reducer } from './reducer'

export default function App() {

	const[state, dispatch] = useReducer(reducer, initialState)
	const updateState = (type) => {
	switch (type) {
		case "plus":
			dispatch({ type: "plus" })
			break;
		case "plus":
			dispatch({ type: "plus" })
			break;
		case "plus":
			dispatch({ type: "plus" })
			break;
		case "plus":
			dispatch({ type: "plus" })
			break;
	
		default:return
			break;
	}

	return (
		<div>
			<h1>state: {JSON.stringify(state,null,1)}</h1>
			<button onClick={updateState("")}>plus</button>
			<button onClick={updateState("")}>minus</button>
			<button onClick={updateState("")}>change name</button>
			<button onClick={updateState("")}>att random</button>
			<button onClick={updateState("")}>att random2</button>

		</div>
	)
}
}
