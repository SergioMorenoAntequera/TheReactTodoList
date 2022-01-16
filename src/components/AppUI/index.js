import './style.css';
import { useContext } from 'react';
import { TodoList } from "../TodoList"
import { TodoItem } from '../TodoItem';
import { TodoAddDialog } from '../TodoAddDialog';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';
import { TodoContext } from '../TodoContext';

export function AppUI() {
  const {
    loading,
    error,
    todoListFiltered,
    deleteTodo,
    toggleDone,
    setShowingAddDialog
  } = useContext(TodoContext) 

  return (<div className='AppUI'>

    <h1 className='title'> The React <br/> Todo List </h1>
    <p className='subTitle'> If you don't do a Todo List, <br/> do you even React bro? </p>

    <TodoTextFilter/>
    <TodoCounter/>

    <TodoList>
      {todoListFiltered.map(todo => 
        <TodoItem key={todo.id} todo={todo} 
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      )}
    </TodoList>

    <button style={{zIndex:3}} onClick={()=>{setShowingAddDialog(prev=>!prev)}}>  
      Add New Todo 
    </button>
    <TodoAddDialog/>

  </div>);
}
