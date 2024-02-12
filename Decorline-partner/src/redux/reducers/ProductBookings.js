import { createSlice } from "@reduxjs/toolkit"
import { ProductOrders } from "../../Data/ProductOrders";



const initialState={
    status:'New Orders',
    productsData:ProductOrders,
    productDetails:false,
    orderDetails:null

}

const productsBookingSlice=createSlice({
    name: 'Product Bookings',
    initialState,
    reducers:{
        setStatus:(state,action)=>{
            state.status=action.payload;
        },
        setProductDetails:(state,action)=>{
            state.productDetails=action.payload
        },
        setOrderDetails:(state,action)=>{
            state.orderDetails=action.payload

        },


    }
})


export const productBookingsReducer=productsBookingSlice.reducer;
export const ProductBookingsActions=productsBookingSlice.actions;

export const productStatusSelector=(state)=>state.productBookingsReducer.status;
export const productDataSelector=(state)=>state.productBookingsReducer.productsData;
export const ProductDetailsShowSelector=(state)=>state.productBookingsReducer.productDetails;
export const productDetailsSelector =(state)=>state.productBookingsReducer.orderDetails;




