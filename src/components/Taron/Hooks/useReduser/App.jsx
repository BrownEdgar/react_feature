import React , {useReducer} from 'react'
import { initialState, reducer } from './reducer'
import { COUNT_PLUS, COUNT_MINUS, COUNT_NEXTNAME, COUNT_RANDOM, COUNT_COUNT } from './actionTypes'
import "./App.scss"

export default function App() {
    const [state , dispatch] = useReducer(reducer, initialState)
    const updateState = (type) => {
        switch(type){
                case COUNT_PLUS:
                dispatch({type: COUNT_PLUS})
                break;
                case COUNT_MINUS:
                dispatch({type: COUNT_MINUS})
                break;
                case COUNT_NEXTNAME:
                dispatch({type: COUNT_NEXTNAME})
                break;
                case COUNT_RANDOM:
                dispatch({type: COUNT_RANDOM})
                break;
                case COUNT_COUNT:
                dispatch({type: COUNT_COUNT})
                break;   

                default: return
        }
    }

  return (
    <div>
        <pre>state:{JSON.stringify(state , null , 1)}</pre>
        <button onClick={() => updateState(COUNT_PLUS)}>plus</button>
        <button onClick={() => updateState(COUNT_MINUS)}>minus</button>
        <button onClick={() => updateState(COUNT_NEXTNAME)}>nextname</button>
        <button onClick={() => updateState(COUNT_RANDOM)}
        disabled={state.count === 0}
        >random</button>
        <button onClick={() => updateState(COUNT_COUNT)}
        disabled={state.data.lenght === 0}
        >count</button>
    </div>
  )
}