const initialDataValue = [1, 67, 4, 56, 7, 23, 6547, 555, 666];

export default function dataReducer(state = initialDataValue, action) {
	return state;

}
function foo(state) {
	const result = state.data
		.map(n => n.toString())
		.filter(elem => elem.startsWith("6")).length;
	return { ...state, count: result }

}