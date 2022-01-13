import './style.css';
import { TodoList } from "../TodoList"
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';


export function AppUI({ 
    loading,
    error,
    todoList,
    setTodoList,
    filterText,
    setFilterText,
    addTodo,
    deleteTodo,
    toggleDone
  }) {
  return (<>
  
    <TodoAdd addTodo={addTodo}/>
    
    <TodoCounter 
      total={todoList.length} 
      filtered={todoList.length} 
      done={todoList.filter(it=>it.done).length}
    />

    <TodoTextFilter 
      setFilterText={setFilterText} 
    />

    <TodoList>
      {loading && !error && <p> We are loading you list froom the "API"</p>}
      {!loading && todoList.length === 0 && <p> No te queda naica </p>}
      {!loading && todoList.length === 0 && <p> No hemos encntrao naica </p>}

      {todoList.map(todo => 
        <TodoItem key={todo.id} todo={todo} 
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      )}
    </TodoList> 
  </>);
}
