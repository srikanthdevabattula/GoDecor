import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


import {Products} from '../../data/Products'




const initialState={
 
    products:null,
    cartItems:[],
    totalAmount:0,
    status: 'idle',
    error:null,
    isDataFetched: false, 
}


// Thunk action to fetch products
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    try {
      const response = await axios.get('https://godecor.api.ricoz.in/api/v1/product/getAllProducts');
      console.log(response.data.data)
      return response.data.data; // Assuming you want to slice first four products
    } catch (error) {
      throw Error('Error fetching data:', error);
    }
  }
);

const productSlice= createSlice({
    name:'products',
    initialState,
    reducers:{
        toggleWishlist:(state,action)=>{
            state.products.map((product,i)=>{
                if(product._id===action.payload){
                    product.wishlist= !product.wishlist
                }
                return product;
            })
        },
        cart:(state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload);
      
            if (existingItem) {
              // If the product is already in the cart, increase its quantity
              existingItem.quantity += 1;
            } else {
              // If the product is not in the cart, add it with quantity 1
              const productToAdd = state.products.find(product => product._id === action.payload);
              state.cartItems.push({ ...productToAdd, quantity: 1 });
            }
          },
          increaseQuantity: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload);
          
            if (existingItem) {
              // If the item is already in the cart, increase its quantity
              existingItem.quantity += 1;
            } else {
              // If the item is not in the cart, add it with quantity 1
              const productToAdd = state.products.find(product => product._id === action.payload);
              state.cartItems.push({ ...productToAdd, quantity: 1 });
            }
          },
          decreaseQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
              if (item._id === action.payload) {
                // Decrease quantity
                item.quantity -= 1;
      
                // Remove the item from cart if the quantity becomes 0
                if (item.quantity <= 0) {
                  return null; // Filtering out the item
                }
              }
              return item;
            }).filter(Boolean); // Remove null values from the array
          },
          deleteItem:(state,action)=>{
            state.cartItems = state.cartItems.map((item) => {
                if (item._id === action.payload) {
                  // Decrease quantity
                  item.quantity = 0;
        
                  // Remove the item from cart if the quantity becomes 0
                  if (item.quantity <= 0) {
                    return null; // Filtering out the item
                  }
                }
                return item;
              }).filter(Boolean);

          },
          total: (state, action) => {
            state.totalAmount = state.cartItems.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0);
          },

    },
    extraReducers: (builder) => {
      builder
          .addCase(fetchAllProducts.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(fetchAllProducts.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.products = action.payload;
          })
          .addCase(fetchAllProducts.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message;
          });
  },
});




export const productsReducer=productSlice.reducer;
export const actions=productSlice.actions;


export const productsSelector=(state)=>state.productsReducer.products

export const cartSelector=(state)=>state.productsReducer.cartItems

export const totalSelector=(state)=>state.productsReducer.totalAmount


export const selectProductsStatus = state => state.productsReducer.status;

export const selectProductsError = state => state.productsReducer.error;



