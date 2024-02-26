
import {Products} from '../../data/Products'
import { createSlice } from "@reduxjs/toolkit"
const initialState={
    products:Products
}


const productSlice= createSlice({
    name:'products',
    initialState,
    reducers:{

    }
})



export const productsReducer=productSlice.reducer;
export const actions=productSlice.actions;


export const productsSelector=(state)=>state.productsReducer.products