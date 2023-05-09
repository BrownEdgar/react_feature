import { SUM_NUMBERS } from "./ActionTypes";

const initialSumValue = {
  age: 22,
  weight: 64,
  height: 170,
  number: 3,
};

export default function sumReducer(state = initialSumValue, action) {
  switch (action.type) {
    case SUM_NUMBERS:
        return Object.values(initialSumValue).reduce((a , b) => a + b, 0)
    default:
      return state;
  }
}

// - Կա Օբյեկը, որի մեջ բոլոր հատկությունները "number" տիպի արժեքներ են պարունակում,
//   գրել կոդ, որը կստանա այդ թվերի գումարը
