import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../Data/product";




const initialState={
    products:Products,
    view:false,
    viewProduct:null,
    editModal:false,
    deleteModal:false,
    addProductModal:false,
    addStock:false,
}


const ProductsSlice=createSlice({
    name: 'Products',
    initialState,
    reducers:{
        setView:(state,action)=>{
            state.view=action.payload
        },
        viewProduct:(state,action)=>{
            state.viewProduct=action.payload
        },
        setEditModal:(state,action)=>{
            state.editModal=action.payload;
        },
        setDeleteModal:(state,action)=>{
            state.deleteModal=action.payload;
        },
        setAddproduct:(state,action)=>{
            state.addProductModal=action.payload;
        },
        setAddStock:(state,action)=>{
            state.addStock=action.payload;
        }

        


    }
})

export const ProductsReducer=ProductsSlice.reducer;
export const ProductsActions=ProductsSlice.actions;

export const ProductsSelector=(state)=>state.ProductsReducer.products;
export const ViewSelector = (state) => state.ProductsReducer.view;
export const ViewProductSelector = (state) => state.ProductsReducer.viewProduct;

export const editModalSelector=(state)=>state.ProductsReducer.editModal;

export const deleteModalSelector=(state)=>state.ProductsReducer.deleteModal;

export const addProductModal=(state)=>state.ProductsReducer.addProductModal;
export const AddStockModal=(state)=>state.ProductsReducer.addStock;


