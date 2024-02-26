import { createSlice } from "@reduxjs/toolkit"
import { Designs } from "../../Data/Designs"




const initialState={
    designs:Designs,
    view:false,
    viewDesign:null,
    addDesign:false,
    editDesign:false,
    deleteDesign:false
}


const DesignsSlice=createSlice({
    name:'Designs',
    initialState,
    reducers:{
        setView:(state,action)=>{
            state.view=action.payload
        },
       
        viewDesign:(state,action)=>{
            state.viewDesign=action.payload
        },
        setAddDesign:(state,action)=>{
            state.addDesign=action.payload
        },
        setEditDesign:(state,action)=>{
            state.editDesign=action.payload
        },
        setDeleteDesign:(state,action)=>{
            state.deleteDesign=action.payload
        },
    }
})

export const DesignsReducer=DesignsSlice.reducer;
export const DesignsActions=DesignsSlice.actions;


export const viewDesignSelector = (state) => state.DesignsReducer.viewDesign;
export const viewSelector=(state)=>state.DesignsReducer.view
export const DesignsSelector=(state)=>state.DesignsReducer.designs
export const addDesignSelector=(state)=>state.DesignsReducer.addDesign
export const editDesignSelector=(state)=>state.DesignsReducer.editDesign
export const deleteDesignSelector=(state)=>state.DesignsReducer.deleteDesign


