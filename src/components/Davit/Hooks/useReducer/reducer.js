import {
  ADD_NAME,
  SORT_ARR,
  ULOAD_POSTS
} from "./actionTypes";




export const initialState = {
  actions: 0,
  developers: [],
  posts: [],
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export const reducer = (state, action) => {
  switch (action.type) {
       case ULOAD_POSTS:
      return {...state, posts:action.payload.posts}
      case ADD_NAME:
			return  {...state ,developers: [...state.developers, action.payload.message]} ;
      case SORT_ARR:
        return sort(state);
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



// Ստեղծել կոճակներ որոնք կանեն հետևյալ գործողությունները
// - Jsonplaceholder -ից կստանա 10 հատ post և կպահի `posts` զանգվածի մեջ և նկարել էջում
// - առաջին գործողությունով ստացած 10 հատ post-ի id-ը ջնջել և փոխարենը դնել arr զանգվածի 10 թվերը։
// - ամեն մի post-ում լինի 'x' կոճակ և այն ՛click՛ի ժամանակ պիտի ջնջի հերթական post-ը,

//https://jsonplaceholder.typicode.com/posts
// - Ամեն մի գործողությունից հետո(click) `actions` թվային հատկությունը ավելացնել 1 - ով։