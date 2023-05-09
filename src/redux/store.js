import { configureStore } from "@reduxjs/toolkit"
import countSlice from "./features/count/countSlice"
import productsSlice from "./features/products/productsSlice"





export default configureStore({
	reducer: {
		count: countSlice,
		products: productsSlice
	}
})

