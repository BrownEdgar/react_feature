import { FIND_NUMBER } from "./ActionTypes";

const initialFindNumberValue = [7,23,17,64,71,77,34,43]

export default function findNumberReducer(state = initialFindNumberValue , action) {
    switch (action.type) {
        case FIND_NUMBER:
            const result = state.map(elem => elem.toString()).filter(elem => elem.includes("7")).length
            return {...state, total: result}        
        default:
            return state;
    }
}


// Ունենալ ֆունկցիա,որը ստանալով զանգված ասում է թե քանի "number” տրպի էլեմենտներ
// կան փոխանցված զանգվածում,որոնք պարունակում են 7 թվանշանը: