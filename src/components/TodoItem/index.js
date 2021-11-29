import './style.css';

export function TodoItem({ name, done }) {

  return (
    <p className = {`todo-item ${ done ? "done":"" }`} > 
      {name} 
    </p> 
  );
}