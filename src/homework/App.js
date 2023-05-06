import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GET_TODOS,GET_POSTS,GET_USERS,GET_COMMENTS} from "./homework/slice/actionTypes";


export default function App() {


	

	const dispatch = useDispatch()

	const  handleChange1 =()=>{
		dispatch({type: GET_TODOS})
	}
	const  handleChange2 =()=>{
		dispatch({type: GET_POSTS})
	}
	const  handleChange3 =()=>{
		dispatch({type: GET_COMMENTS})
	}
	const  handleChange4 =()=>{
		dispatch({type: GET_USERS})
	}
	
	

	return (
		<div>
			<h1 align="center" >REACT - REDUX</h1>
			<br />
			<div align="center">
			<button className="btn" onClick={handleChange1}>GET USERS</button>
			<button className="btn" onClick={handleChange2}>GET POSTS</button>
			<button className="btn" onClick={handleChange3}>GET COMMENTS</button>
			<button className="btn" onClick={handleChange4}>GET TODOS</button>
			</div>
			<hr />

			<pre>
				{JSON.stringify()}
			</pre>
		</div>
	)
}
