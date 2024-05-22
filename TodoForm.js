import React from 'react';
import {useState}from 'react';
import { useDispatch ,useSelector} from 'react-redux';
// import { addTodo} from '../reduxes/Actions/todoactions';
import { actions } from '../reduxes/reducers/todoReducers';
import { notificationSelector } from '../reduxes/reducers/notificationReducers';
import { resetnotfication } from '../reduxes/reducers/notificationReducers';
import "./TodoForm.css";

export function TodoForm(){
    const dispatch=useDispatch();
    const [todoText,setTodoText]=useState("");
    const message=useSelector(notificationSelector);
    if(message){
        setTimeout(()=>{
            dispatch(resetnotfication());

        },3000);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(actions.add(todoText));
        setTodoText("");

    }
    return(
        <div className='container'>
            {
                message&&<div>{message}</div>
            }
            
            <form onSubmit={handleSubmit}>
                <input type="text"
                  className='form-contor'
                  value={todoText}
                  onChange={(e)=>setTodoText(e.target.value)}/>
                  <button className='btn-form' type="submit" >Create Todo</button>
            </form>
        </div>
    )
}



