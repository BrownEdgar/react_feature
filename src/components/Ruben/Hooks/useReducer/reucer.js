export const initialState = {
    count: 0,
    data: [],
    person: {
        id: 1,
        name: "reducer"
    }
};

export const reducer = (state, action) => {
   
    switch (action.type) {
        case "plus": return {...state, count:state.count + 1};
        case "minus": return {...state, count:state.count - 1};
        case "changeName":return {...state.person,name: 'Hook'};
        case "randonNumber": return random(state);
        case "maxRandom": return getMaxValue(state);

        default: return state
    }
}

function random (state) {
    const arr = []
    for (let i = 0; i <state.count; i++) {
        arr.push(Math.trunc(Math.random()*100))
    }
    return {...state, data:arr}
}
function getMaxValue  (state) {
    const max = Math.max(...state.data)
    return {...state, max:max}

}
