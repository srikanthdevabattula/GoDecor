import { configureStore } from "@reduxjs/toolkit";

import { productsReducer } from "./reducers/productReducer";



export const store = configureStore({
    reducer:{
        productsReducer,
    }
})