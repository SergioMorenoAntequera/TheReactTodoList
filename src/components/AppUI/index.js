import './style.css';
import { useContext } from 'react';
import { TodoList } from "../TodoList"
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';
import { TodoContext } from '../TodoContext';

import { Modal, ModalDialog } from '../Modal';


export function AppUI() {
  const {
    loading,
    error,
    todoListFiltered,
    deleteTodo,
    toggleDone,
    showingAddDialog,
    setShowingAddDialog
  } = useContext(TodoContext) 

  return (<>
  
    <TodoAdd/>
    
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

    <button onClick={()=>{setShowingAddDialog(!showingAddDialog)}}>  
      toggle 
    </button>

    <ModalDialog 
      showing={showingAddDialog}
      setShowing={setShowingAddDialog}
      title="esto es un dialogo jaja"
      body={"vaya cuerpo que tiene este dialogo"}
      button1={{
        action: ()=>{console.log('button1')},
        text: "Primary Button"
      }}
      button2={{
        action: ()=>{console.log('button2')},
        text: "secondary button"
      }}
    />
  </>);
}
