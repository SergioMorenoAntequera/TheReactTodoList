import './style.css';
import { TodoList } from "../TodoList"
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';
import { TodoContext } from '../TodoContext';


export function AppUI() {
  return (<>
  
    <TodoAdd/>
    
    <TodoCounter/>

    <TodoTextFilter/>

    <TodoContext.Consumer>
      {({
        loading,
        error,
        todoListFiltered,
        deleteTodo,
        toggleDone,
      }) => {
        return <TodoList>
          {loading && !error && <p> We are loading you list froom the "API"</p>}
          {!loading && todoListFiltered.length === 0 && <p> No te queda naica </p>}
          {!loading && todoListFiltered.length === 0 && <p> No hemos encntrao naica </p>}
    
          {todoListFiltered.map(todo => 
            <TodoItem key={todo.id} todo={todo} 
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
            />
          )}
        </TodoList> 
      }}
    </TodoContext.Consumer>
    
  </>);
}
