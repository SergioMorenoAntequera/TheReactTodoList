import { TodoItem } from '../TodoItem';
import './style.css';

export function TodoList({ todoList }) {




  return (<div>
    
    {todoList.map(todo => 
      <TodoItem key={todo.id} 
                name={todo.name} 
                done={todo.done}>

      </TodoItem>
    )}

  </div>);
}