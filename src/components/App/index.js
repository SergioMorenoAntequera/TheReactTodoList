import './style.css';
import { TodoLoading, TodoError, TodoNotFound, TodoEmptySearch } from '../TodoStates';
import { TodoList } from "../TodoList"
import { TodoItem } from '../TodoItem';
import { TodoAddDialog } from '../TodoAddDialog';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';
import { FaPlus } from 'react-icons/fa';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';
import { StorageAlertWithStorageListener } from '../StorageAlert';

export function App() {
  
  const {
    todoList,
    setSynchronized,
    addTodo,
    deleteTodo,
    toggleDone,
    filterText,
    setFilterText,
    todoListFiltered,
    setShowingAddDialog,
    showingAddDialog,
    loading, 
    error,
  } = useTodos()

  return (<div className='App'>

    <h1 className='title'> The React <br/> Todo List </h1>
    <p className='subTitle'> If you don't do a Todo List, <br/> do you even React bro? </p>

    <TodoHeader loading={loading}>
      <TodoTextFilter 
        setFilterText={setFilterText}
      />

      <TodoCounter  
        todoList={todoList} 
        todoListFiltered={todoListFiltered}
      />
    </TodoHeader>
    
    <TodoList
      error = {error}
      loading = {loading}
      todoList = {todoList}
      todoListFiltered = {todoListFiltered}
      filterText = {filterText}
      onError = {()=><TodoError/>}
      onLoading = {()=><TodoLoading/>}
      onEmpty = {() => <TodoNotFound setShowingAddDialog={setShowingAddDialog}/> }
      onEmptySearch = {(text) => <TodoEmptySearch text={text}/> } 
    >
      {(todo)=>
        <TodoItem key={todo.id} todo={todo} 
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
      />}
    </TodoList>

    <button className={`AddNewTodo ${showingAddDialog ? 'open':''}`} 
            onClick={()=>{setShowingAddDialog(prev=>!prev)}}>  
      <FaPlus/>
    </button>
    <TodoAddDialog 
      addTodo={addTodo}
      showingAddDialog={showingAddDialog} 
      setShowingAddDialog={setShowingAddDialog}
    />

    <StorageAlertWithStorageListener storageKey={"TODOS_V1"} setSynchronized={setSynchronized}/>
    
  </div>);
}
