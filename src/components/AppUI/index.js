import './style.css';
import { TodoLoading, TodoError, TodoNotFound } from '../TodoStates';
import { useContext } from 'react';
import { TodoList } from "../TodoList"
import { TodoItem } from '../TodoItem';
import { TodoAddDialog } from '../TodoAddDialog';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';
import { TodoContext } from '../TodoContext';
import { FaPlus } from 'react-icons/fa';
import TodoHeader from '../TodoHeader';

export function AppUI() {
  const {
    loading,
    error,
    todoListFiltered,
    deleteTodo,
    toggleDone,
    showingAddDialog,
    setShowingAddDialog,
    setFilterText,
    todoList
  } = useContext(TodoContext) 

  return (<div className='AppUI'>

    <h1 className='title'> The React <br/> Todo List </h1>
    <p className='subTitle'> If you don't do a Todo List, <br/> do you even React bro? </p>

    <TodoHeader>
      <TodoTextFilter 
        setFilterText={setFilterText}
      />
      <TodoCounter  
        todoList={todoList} 
        todoListFiltered={todoListFiltered} 
        loading={loading}
      />
    </TodoHeader>
    

    <TodoList>
      { error && <TodoError/> }
      { loading && <TodoLoading/> }
      { !loading && todoListFiltered.length === 0 && 
        <TodoNotFound setShowingAddDialog={setShowingAddDialog}/> 
      }
      
      {todoListFiltered.map(todo => 
        <TodoItem key={todo.id} todo={todo} 
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      )}
    </TodoList>

    <button className={`AddNewTodo ${showingAddDialog ? 'open':''}`} 
            onClick={()=>{setShowingAddDialog(prev=>!prev)}}>  
      <FaPlus/>
    </button>
    <TodoAddDialog/>

  </div>);
}
