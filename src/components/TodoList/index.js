import react, { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import './style.css';

export function TodoList(props) {
  const [todoList, setTodoList] = useState(props.todoList)

  const addTodo = (newTodo) => {
    let auxTodos = [...todoList];
    let auxNewTodo = newTodo;
    auxNewTodo.id = auxTodos[auxTodos.length - 1].id + 1
    auxTodos.push(auxNewTodo);
    console.log(auxTodos)
    setTodoList(auxTodos);
  }

  return (<>
    
    <TodoAdd addTodo={addTodo}/>

    {todoList.map(todo => 
      <TodoItem key={todo.id} 
                name={todo.name} 
                done={todo.done}>

      </TodoItem>
    )}

  </>);
}