import {  createSlice,   } from '@reduxjs/toolkit'




const countSlice = createSlice({
	name:"count",
	initialState: [2,234,56,33],
	reducers:{
		addElem(state,action){
    
			state.push(action.payload)
			return state
		},
		getSum(state,action){
     const arr = state.at(-1)
		 if (+arr < 10 ) {
			 return state
		 }
		 const sum = arr.toString().split('').reduce((a,b) => a + +b, 0);
		 state.push(sum)
		 return state
		}
	}
})

export default countSlice.reducer
export const { addElem, getSum } = countSlice.actions