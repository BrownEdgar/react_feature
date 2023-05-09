import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchProducts } from './ProductAPI';


export const addProductsAsync = createAsyncThunk(
	"products/async",
	async (url) => {
		const response = await fetchProducts(url);
		return response
	}
)

const productSlice = createSlice({
	name: 'products',
	initialState: {
		data: [],
		status: ''
	},
	reducers: {

	},
	extraReducers: (builder) => {
		builder
		.addCase(addProductsAsync.pending, (state) => {
			state.status = "pending";
			return state
		})
		.addCase(addProductsAsync.fulfilled, (state,action) => {
			return {
				status: "success",
				data: action.payload
			}
		})
		.addCase(addProductsAsync.rejected, (state) => {
			return {
				status: "failure",
				data: []
		}})
	}
})

export default productSlice.reducer