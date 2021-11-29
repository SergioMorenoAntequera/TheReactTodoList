import './style.css';
import { TodoList } from "../TodoList"


export function AppUI({ todoList }) {
  return (
    <TodoList todoList={todoList}/>
  );
}
