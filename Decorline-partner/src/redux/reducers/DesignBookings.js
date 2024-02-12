import { createSlice } from "@reduxjs/toolkit"
import { DesignData } from "../../Data/DesignData";





const initialState={
    status:'New Orders',
    DesignData:DesignData,
    orderDetails:false,
    orderData:null
}


const DesignBookinsSlice= createSlice({
    name:'Design bookings',
    initialState,
    reducers:{
        setStatus:(state,action)=>{
            state.status = action.payload;
        },
        activeRequest:(state,action)=>{
            state.DesignData.map((data,i)=>{
                if(i===action.payload){
                    data.status='Active'
                }
                return data;
            })
        },
        setOrderDetails:(state,action)=>{
            state.orderDetails=action.payload
        },
        setOrderData:(state,action)=>{
            state.orderData=action.payload

        },
       



    }
})


export const designBookingsReducer=DesignBookinsSlice.reducer;
export const DesignActions=DesignBookinsSlice.actions;
//Selectors
export const DesignStatusSelector=(state)=>state.designBookingsReducer.status;
export const activeRequestSelector=(state)=>state.designBookingsReducer.DesignData;
export const OrderDetailsShowSelector=(state)=>state.designBookingsReducer.orderDetails;
export const OrderDataSelector=(state)=>state.designBookingsReducer.orderData;





