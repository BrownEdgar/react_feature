<<<<<<< HEAD
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
=======
import React ,{useState ,useReducer } from 'react'
import { getPosts, initialState, reducer } from './reducer'
import { ADD_NAME, REPLACE_ID, SORT_ARR} from './actionTypes';

import "./App.scss"

export default function App() {
const [state, dispatch] = useReducer(reducer, initialState)
const [post , setPost] = useState(null)
const onClickHandler = async () =>{
const post = await getPosts()
setPost(post)
}
const replaceHandler =() =>{
	const m = initialState.posts.map(elem => {
return elem
	})
	console.log(m)
}
const [message, setMessage] = useState('');
const handleChange = (event) => {
setMessage(event.target.value);
};
const updateState = (type) => {
switch (type) {
case ADD_NAME:
dispatch({type: ADD_NAME, payload:{message}})
break;
case SORT_ARR:
dispatch({type : SORT_ARR})
break;
// case REPLACE_ID:
// dispatch({type : REPLACE_ID})
// break;
default: return;
}
}
return (
<div>
	<pre>state:{JSON.stringify(state , null , 1)}</pre>
	<button onClick={onClickHandler}>Get Posts</button>
	<button onClick={()=> updateState(SORT_ARR)}>Sort Arr</button>
	<button onClick={replaceHandler}>Replace ID</button>
	<div>
		<input type="text" id="message" name="message" onChange={handleChange} />
		<button onChange={handleChange} onClick={()=> updateState(ADD_NAME)}>Add Name</button>
	</div>




</div>
)}
>>>>>>> fa2230779d62c12a1cc920867ecac493bb42bd5e
