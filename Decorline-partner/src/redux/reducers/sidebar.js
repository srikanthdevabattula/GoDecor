import { createSlice } from "@reduxjs/toolkit"






const initialState={
    sideBar:'Consultations',
    pagePath:'Pages / Bookings / Consultations'
}

const sidebarSlice= createSlice({
    name:"sidebar",
    initialState,
    reducers:{
    update:(state,action)=>{
        state.sideBar = action.payload;
    },
    pathUpdate:(state,action)=>{
        state.pagePath=action.payload
    }
    }
});

export const sidebarReducer= sidebarSlice.reducer;
export const actions = sidebarSlice.actions;

export const sidebarSelector =(state)=>state.sidebarReducer.sideBar;
export const pathSelector=(state)=>state.sidebarReducer.pagePath;


