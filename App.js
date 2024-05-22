import {useState} from 'react';
import {Provider} from 'react-redux';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { store } from './reduxes/store';
import {BrowserRouter} from 'react-router-dom';
// import {Router} from  'react-router-dom';
import { Route ,Routes} from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Noteform from './Noteform/Noteform';
import Notelist from './Notelist/Notelist';
import './App.css';

function App() {
  const [todos,setTodos]=useState([]);
  const createTodo=(text)=>{
    setTodos([...todos,{id:todos.length+1,text,compleated:false}]);
  }
 
  return (
    <div className="App">Todo App
    <Provider store={store}>
        <TodoForm onCreateTodo={createTodo}></TodoForm>
        <TodoList todos={todos} ></TodoList>
      
       
    </Provider>
   
     
    </div>
  );
//   return(
//     <div>
//         <Provider store={store}>
//             <BrowserRouter>
//             <Routes>
//                 <Route path="" element={(<Home/>)}>
//                     </Route>
//                  <Route path="todo" element={
//                    <Fragment>
//                             <Navbar>
//                                 <h1>To Do</h1>
//                                 <TodoForm></TodoForm>
//                                 <TodoList></TodoList>
//                             </Navbar>
//                         </Fragment>
//                     }>
//                     </Route>
//                     <Route path="notes" element={
//                         <Fragment>
//                             <Navbar>
//                                 <h1>Notes</h1>
//                                 <Noteform></Noteform>
//                                 <Notelist></Notelist>
//                             </Navbar>
//                         </Fragment>
//                     }>
//                     </Route>
                    
                    
//                     </Routes></BrowserRouter>

//         </Provider>
//     </div>

}

export default App;
