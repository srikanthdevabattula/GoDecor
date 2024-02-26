import { createSlice } from "@reduxjs/toolkit"





const initialState={
    tabs:'Details',
    edit:true
    
}


const settingsSlice=createSlice({
    name:"settings",
    initialState,
    reducers:{
        setTab:(state,action)=>{
            state.tabs =action.payload 
        },
        setEdit:(state,action)=>{
            state.edit=action.payload
        }
    }
})


export const settingsReducer=settingsSlice.reducer;

export const settingsActions = settingsSlice.actions;

export const settingsTabSelector=(state)=> state.settingsReducer.tabs;

export const  EditSelector=(state)=>state.settingsReducer.edit;
