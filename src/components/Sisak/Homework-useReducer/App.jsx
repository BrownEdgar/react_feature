import React, { useReducer, useEffect } from 'react'
import { initialState, reducer } from './reducer'
import axios from 'axios';
import { CHANGE_NAME, COUNT_MINUS, COUNT_PLUS, GET_MAX, RANDOM_ARR, ULOAD_TODOS } from 'actionTypes';

import './App.css'

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos', {
			params: {
				_limit: 10,
			}
		}).then(response => {
			dispatch({ type: ULOAD_TODOS, payload: { todos: response.data } })
		})
	}, [])


	const updateState = (type) => {
		switch (type) {
			case COUNT_PLUS:
				dispatch({ type: COUNT_PLUS, payload: { count: 6 } })
				break;
			case COUNT_MINUS:
				dispatch({ type: COUNT_MINUS })
				break;
			case CHANGE_NAME:
				dispatch({ type: CHANGE_NAME, payload: "Hook" })
				break;
			case RANDOM_ARR:
				dispatch({ type: RANDOM_ARR })
				break;
			case GET_MAX:
				dispatch({ type: GET_MAX })
				break;
			default: return;
		}
	}

	return (
		<div>
			<pre>state: {JSON.stringify(state, null, 1)}</pre>
			<button onClick={() => updateState(COUNT_PLUS)}>plus</button>
			<button onClick={() => updateState(COUNT_MINUS)}>minus</button>
			<button onClick={() => updateState(CHANGE_NAME)}>change name</button>
			<button onClick={() => updateState(RANDOM_ARR)}
				disabled={state.count === 0}
			>add random </button>
			<button onClick={() => updateState(GET_MAX)}
				disabled={state.data.length === 0}
			>add random2 </button>
		</div>
	)
}