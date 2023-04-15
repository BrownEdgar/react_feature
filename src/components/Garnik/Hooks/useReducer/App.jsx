import React, {useReducer} from 'react'
import { initialState, reducer } from './reducer'

export default function App() {

	const[state, dispatch] = useReducer(reducer, initialState)
	const handleClick = () => {
		dispatch({type: "plus"})
	}
	const handleClick2 = () => {
		dispatch({ type: "minus" })
	}
	const handleClick3 = () => {
		dispatch({type:"changeName"})
	}
	return (
		<div>
			<h1>state: {JSON.stringify(state,null,0)}</h1>
			<button onClick={handleClick}>plus</button>
			<button onClick={handleClick2}>minus</button>
		</div>
	)
}
