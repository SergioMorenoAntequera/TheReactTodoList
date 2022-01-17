import './style.css';
import { TodoLoading, TodoError, TodoNotFound } from '../TodoStates';
import { TodoList } from "../TodoList"
import { TodoItem } from '../TodoItem';
import { TodoAddDialog } from '../TodoAddDialog';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';
import { FaPlus } from 'react-icons/fa';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';


export function App() {
  
  const {
    todoList,
    addTodo,
    deleteTodo,
    toggleDone,
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
    
    <TodoList
      error = {error}
      loading = {loading}
      todoList = {todoListFiltered}
      onError = {()=><TodoError/>}
      onLoading = {()=><TodoLoading/>}
      onEmpty = {() => <TodoNotFound setShowingAddDialog={setShowingAddDialog}/>}
      render = {(todo)=>
        <TodoItem key={todo.id} todo={todo} 
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
      />}
    />

    <button className={`AddNewTodo ${showingAddDialog ? 'open':''}`} 
            onClick={()=>{setShowingAddDialog(prev=>!prev)}}>  
      <FaPlus/>
    </button>
    <TodoAddDialog 
      addTodo={addTodo}
      showingAddDialog={showingAddDialog} 
      setShowingAddDialog={setShowingAddDialog}
    />
  </div>);
}
