import React, {useEffect, useReducer} from 'react'
import { initialState, reducer } from './reucer'
import "./App.css"
export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/todos',{
        params: {
            _limit:10,
        }
    }).then(response => {
        dispatch({type: "uploadTodo", payload: {todos: response.data}})
    })
}, [])


    const handleClick = () => {
        dispatch({type: 'plus'})
    }
    const handleClick2 = () => {
        dispatch({type: 'minus'})
    }
    const handleClick3 = () => {
        dispatch({type: 'changeName'})
    }
    const handleClick4 = () => {
        dispatch({type: 'randonNumber'})
    }
    const handleClick5 = () => {
        dispatch({type: 'maxRandom'})
    }
  return (
    <div>
        <h1>state: {JSON.stringify(state,null,0)}</h1>
        <button onClick={handleClick}>plus</button>
        <button onClick={handleClick2}>minus</button>
        <button onClick={handleClick3}>change name</button>
        <button onClick={handleClick4}>randonNumber</button>
        <button onClick={handleClick5}>maxRandom</button>
    </div>
  )
}

