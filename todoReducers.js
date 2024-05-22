// import { ADD_TODO,TOGGLE_TODO } from "../Actions/todoactions";
// const {createSlice} =require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const intialstate={
    todos:[{ text:"meeting at 9am",compleated:true},{
       text:"lunch at 2pm",compleated:false,
    }],
}
const todoSlice=createSlice({
    name:'todo',
    initialState:intialstate,
    reducers:{
        add:(state,action)=>{
            state.todos.push({
                text:action.payload,
                compleated:false,
            })
        },
        toggle:(state,action)=>{
            state.todos.map((todo,i)=>{
                if(i===action.payload){
                todo.compleated=!todo.compleated;
                }
                return todo;
            })
        }
    }
})
export const todoReducers=todoSlice.reducer;
export const actions=todoSlice.actions;
export const todoSelector=(state)=>state.todoReducers.todos;
//this is by using redux toolkit




// this is by using redux 
// export  function todoReducers(state=intialstate,action){
//     switch(action.type){
//         case ADD_TODO:
//             return{
//                 ...state,
//                 todos:[...state.todos,
//                 {
//                     text:action.text,
//                     compleated:false,
//                 }]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos:state.todos.map((todo,i)=>{
//                     if (i === action.index) {
//                        todo.compleated=!todo.compleated;
//                     }
//                     return todo;
//                 })

//             }
//         default:
//             return state;
           
//     }

// }
