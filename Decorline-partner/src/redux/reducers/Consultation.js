import { createSlice } from "@reduxjs/toolkit"
import { ConsultationBookings } from "../../Data/ConsultationBookings";




const initialState={
    status:'New Requests',
    data:ConsultationBookings,

}

const ConsultationStatusSlice= createSlice({
    name:'Consultation',
    initialState,
    reducers:{
        setConsultationStatus:(state,action)=>{
            state.status = action.payload;
        },
        acceptRequest:(state,action)=>{
            state.data.map((data,i)=>{
                if(i===action.payload){
                    data.status='Accepted'
                }
                return data;
            })
        }
    }
})


export const ConsultationStatusReducer=ConsultationStatusSlice.reducer;
export const StatusActions= ConsultationStatusSlice.actions;
export const statusSelector=(state)=>state.ConsultationStatusReducer.status;
export const acceptRequestSelector=(state)=>state.ConsultationStatusReducer.data;