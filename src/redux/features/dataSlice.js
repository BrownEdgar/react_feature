const initialDataValue = [12, 67, 24, 63, 47, 61];

export default function dataReducer(state = initialDataValue , action) {
    return state;
    
}

function foo(state) {
    const result = state.info.map(elem => elem.toString()).filter(elem => elem.startsWith("6")).length
    return {...state, count: result}
}