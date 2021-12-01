import './style.css';

export function TodoItem({ todo, toggleDone, deleteTodo }) {
  
  return (
  <div className = {`todo-item ${ todo.done ? "done":"" }`}> 
    <p> {todo.name} </p> 
    <p onClick={()=>{toggleDone(todo.id)}}> aaaa </p>  
    <p onClick={()=>{deleteTodo(todo.id)}}> x </p>  
  </div>);
}