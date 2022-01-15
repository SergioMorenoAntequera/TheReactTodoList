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

  return (<>
  
    <button style={{zIndex:3}} onClick={()=>{setShowingAddDialog(prev=>!prev)}}>  
      Add New Todo 
    </button>
    <TodoAddDialog/>


    <TodoCounter/>

    <TodoTextFilter/>

    <TodoList>
      {todoListFiltered.map(todo => 
        <TodoItem key={todo.id} todo={todo} 
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      )}
    </TodoList>

    
  </>);
}
