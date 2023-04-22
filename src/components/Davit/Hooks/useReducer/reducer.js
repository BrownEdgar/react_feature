<<<<<<< HEAD
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
	case "changeName": return { ...state, person:{...state.person,name:'Gago' }};

	default: return state
		
}

}
=======
import {
  ADD_NAME,
  REPLACE_ID,
  SORT_ARR,
} from "./actionTypes";



export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

const URL = "https://jsonplaceholder.typicode.com/posts?_limit=10 "


export const getPosts = async () =>{
  const response = await fetch(URL);
  const body = await response.json();
  

  return initialState.posts.push(body)
}

export const reducer = (state, action) => {
  switch (action.type) {
      case ADD_NAME:
			return  {...state ,developers: [...state.developers, action.payload.message]} ;
      case SORT_ARR:
      return sort(state);
      // case REPLACE_ID:
      // return repId();
      default:
      return state

  }
}

function sort(state) {
  state.arr.sort(function(a, b) {
    return a - b;
  }); 
  return{...state , arr:state.arr}
}


// - առաջին գործողությունով ստացած 10 հատ post-ի id-ը ջնջել և փոխարենը դնել arr զանգվածի 10 թվերը։
// - ամեն մի post-ում լինի 'x' կոճակ և այն ՛click՛ի ժամանակ պիտի ջնջի հերթական post-ը,

// - Ամեն մի գործողությունից հետո(click) `actions` թվային հատկությունը ավելացնել 1 - ով
>>>>>>> fa2230779d62c12a1cc920867ecac493bb42bd5e
