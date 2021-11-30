import './style.css';

export function TodoItem({ name, done }) {

  return (<div className = {`todo-item ${ done ? "done":"" }`}> 
    <p> {name} </p> 
  </div>);
}