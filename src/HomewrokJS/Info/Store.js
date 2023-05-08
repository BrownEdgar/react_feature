import { configureStore } from "@reduxjs/toolkit";
import arrReducer from "./MainInfo/ArrFilter";

export default configureStore({
    reducer: {
        arr: arrReducer
    }
})