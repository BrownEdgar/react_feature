import { createStore } from "redux";

const initialState = {
  count: 0,
  data: ["a", "b", "c"],
  info: [12, 67, 24, 63, 47, 61],
  person: {
    id: 1,
    name: "Alex",
    age: 34,
  },
  posts: [],
};


function foo(state) {
    const result = state.info.map(elem => elem.toString()).filter(elem => elem.startsWith("6")).length
    return {...state, count: result}
}


function rootReduce(state, action) {
  switch (action.type) {
    case "add-count":
      return { ...state, count: state.count + 1 };
    case "add-letter":
      return { ...state, data: state.data.concat(action.payload.item) };
    case "add-posts":
      return { ...state, posts: action.payload.posts };
    case "add-age":
      return { ...state, person: { ...state.person, age: 25 } };
    case "find-number":
      return  foo(state);

    default:
      return state;
  }
}

const store = createStore(rootReduce, initialState);
export default store;
