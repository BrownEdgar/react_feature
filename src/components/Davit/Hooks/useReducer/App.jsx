import React ,{useState ,useReducer ,useEffect} from 'react'
import { initialState, reducer } from './reducer'
import { ADD_NAME, SORT_ARR, ULOAD_POSTS} from './actionTypes';
import axios from 'axios'

import "./App.scss"

export default function App() {
const [state, dispatch] = useReducer(reducer, initialState)
// useEffect(() => {
// axios.get('https://jsonplaceholder.typicode.com/posts',{
// params:{
// _limit: 10,
// }
// }).then(response =>{
// dispatch({type: ULOAD_POSTS , payload : {posts : response.data}})
// })
// }, [])


const [message, setMessage] = useState('');
const handleChange = (event) => {
  setMessage(event.target.value);
};
const updateState = (type) => {
switch (type) {
// case ULOAD_POSTS:
// dispatch({type: ULOAD_POSTS })
// break;
case ADD_NAME:
dispatch({type: ADD_NAME, payload:{message}})
break;
case SORT_ARR:
dispatch({type : SORT_ARR})
break;
default: return;
}
}

return (
<div>
	<pre>state:{JSON.stringify(state , null , 1)}</pre>
	{/* <button onClick={()=> updateState(ULOAD_POSTS)}>Get Posts</button> */}
	<button onClick={()=> updateState(SORT_ARR)}>Sort Arr</button>
	<div>
		<input type="text" id="message" name="message" onChange={handleChange} />
	<button onChange={handleChange} onClick={()=> updateState(ADD_NAME)}>Add Name</button>
	</div>




</div>
)

}