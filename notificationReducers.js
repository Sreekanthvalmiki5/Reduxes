import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./todoReducers";

const initialState={
    message:""
}
const notificationSlice =createSlice({
    name:"notification",
    initialState:initialState,
    reducers:{
      reset:(state,action)=>{
        state.message="";
      }
    }
    ,
    extraReducers: builder=>{
        builder.addCase(actions.add,(state,action)=>{
            state.message="todo is created";
        })
    }
   
})
 export const notificationReducers=notificationSlice.reducer;
 export const notificationSelector=(state)=>state.notificationReducers.message;
 export const resetnotfication=notificationSlice.actions.reset;