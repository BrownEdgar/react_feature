import {
	GET_POSTS,
	ADD_DEV_NAME,
	SORT_ARR,
	CHANGE_ID,
	DELETE_POST,
} from './actionTypes'

export const initialState = {
	actions: 0,
	developers: [],
	posts: [],
	arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export const reducer = (state, action) => {
	switch (action.type) {
		case GET_POSTS:
			return { ...state, posts: action.payload.posts };
		case ADD_DEV_NAME:
			return { ...state, developers: [...state.developers, action.payload] };
		case SORT_ARR:
			return sort(state)
		case DELETE_POST:
			return handleDeletePost(state, action.payload.id)
		case CHANGE_ID:
			return numbers(state)
		default:
			return state;
	}
}
function sort(state) {
	return { ...state, arr: state.arr.sort((a, b) => a - b) }
}
function numbers(state) {
	let a = state.posts.map((post, index) => {
		state.posts[index].id = state.arr[index]
		return post
	})

	return { ...state, posts: a }
}


function handleDeletePost(state, id) {
	const filteredPosts = state.posts.filter(post => post.id !== id);
	return { ...state, posts: filteredPosts }
	
}