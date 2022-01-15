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
      {loading && !error && <p> We are loading you list from the "API"</p>}
      {!loading && todoListFiltered.length === 0 && <p> No te queda naica </p>}
      {!loading && todoListFiltered.length === 0 && <p> No hemos encntrao naica </p>}

      {todoListFiltered.map(todo => 
        <TodoItem key={todo.id} todo={todo} 
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      )}
    </TodoList>

    
  </>);
}
