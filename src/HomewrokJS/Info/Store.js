import { configureStore } from "@reduxjs/toolkit";
import arrReducer from "./MainInfo/ArrFilter";
import generateReducer from "./MainInfo/GenerateArr";
import sumReducer from "./MainInfo/SumNumbers";
import findNumberReducer from "./MainInfo/FindNumber";


export default configureStore({
    reducer: {
        arr: arrReducer,
        sum: generateReducer,
        count: sumReducer,
        amount: findNumberReducer
    }
})