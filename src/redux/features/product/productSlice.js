import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "./ProductAPI";

export const addProductAsync =  createAsyncThunk(
    "product/async",
    async (url) => {
        const responce = await  fetchProduct(url)
        return responce
    }
)
const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        sortData:[],
        status:''
    },
    reducers:{
        sortProduct:(state)=>{
            state.sortData = state.data.sort((x,y)=>y.price - x.price)
            return state
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(addProductAsync.pending,(state)=>{
            state.status = 'pending';
            return state
        })
        .addCase(addProductAsync.fulfilled,(state,action) =>{
            return {
                status:'success',
                data:action.payload
            }
        })
        .addCase(addProductAsync.rejected,(state) =>{
            return {
                status:"failure",
                data:[]
            }
        })
    }
})
export const getAllProducts = state =>state.products
export const getSortProducts = state =>state.products.sortData

export default productSlice.reducer;
export const {sortProduct} = productSlice.actions