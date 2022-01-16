import './style.css';
import { FaTrashAlt } from "react-icons/fa"

export function TodoItem({ todo, toggleDone, deleteTodo }) {
  
  function toggle(event) {
    if(event?.target?.matches(".deleteIcon")) return 
    if(event?.target?.closest(".deleteIcon")) return 
    toggleDone(todo.id)
  }

  return (
  <div className = {`TodoItem ${ todo.done ? "done":"" }`} 
      onClick={toggle}> 
    <div className='LeftPart'>
      <input type="checkbox" checked={todo.done} onChange={toggle}/>
      <p> {todo.name} </p> 
    </div>
    
    <FaTrashAlt className='deleteIcon' onClick={()=>{deleteTodo(todo.id)}}/> 
  </div>);
}