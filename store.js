import * as redux from 'redux';
import { noteReducers } from './reducers/noteReducers';
import {todoReducers} from './reducers/todoReducers';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { notificationReducers } from './reducers/notificationReducers';
import {loggerMiddleware}  from './Middlewares/loggerMiddleware';
// const result=combineReducers({
//     todoReducers,
//     noteReducers,
// })
// export  const store=redux.createStore(result);
export const store=configureStore({
    reducer:{
        todoReducers,
        notificationReducers,
    },
   // middleware:[loggerMiddleware]
})