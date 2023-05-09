import { SUM_GENERATE } from "./ActionTypes";

const initialGenerateValue = [6];

export default function generateReducer(state = initialGenerateValue, action) {
  switch (action.type) {
    case SUM_GENERATE:
      return [...state, state[state.length - 1] + 12];
    default:
      return state;
  }
}

// 2) generateArray(6, 12, 4) [6,18,30,42] - Այսինքն պետք է գեներացնել զանգված,
//  որը սկսվում է 6-ով, ամեն հաջորդը ավելանում է +12-ով։ Քանակը՝ 4
