import {useSelector} from 'react-redux';
import React from 'react';
import "./TodoList.css";
import { useDispatch } from 'react-redux';
// import { toggleTodo} from '../reduxes/Actions/todoactions';
import { actions } from '../reduxes/reducers/todoReducers';
import { todoSelector } from '../reduxes/reducers/todoReducers';
// import { store } from '../reduxes/store';
export function TodoList({onToggle}){
    const todos=useSelector(todoSelector);
    // const todos=store.getState().todos;
    const dispatch=useDispatch();



    return (
        
        <>
        <div className='container'>
         <ul>
            {todos.map((todo,index) => (
                <div className="licontainer"> <li key={index}>
                <span className='content'>{todo.text}</span>
                <span className={todo.compleated?'compleated':'pending'}>{todo.compleated?'compleated':'pending'}</span>
                <button className='button-warning'
                // onClick={()=>{onToggle(index)}}
                onClick={()=>{dispatch(actions.toggle(index))}}
                >Toggle</button>
            </li>

                </div>
               
            ))}
         </ul>
        </div>
        </>
    )
}