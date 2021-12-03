import react, { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { TodoWarning } from '../TodoWarning';
import './style.css';

export function TodoList(props) {
  const [todoList, setTodoList] = useState(props.todoList)

  const addTodo = (newTodo) => {
    let auxTodos = [...todoList];
    let auxNewTodo = newTodo;
    auxNewTodo.id = auxTodos[auxTodos.length - 1].id + 1;
    auxTodos.push(auxNewTodo);
    _warn(auxTodos);
  }
  const deleteTodo = (todoToRemoveId) => {
    let auxTodos = [...todoList];
    var index = auxTodos.findIndex(it=>it.id === todoToRemoveId)
    auxTodos.splice(index, 1);
    _warn(auxTodos);
  }
  const toggleDone = (todoId) => {
    let auxTodos = [...todoList];
    var index = auxTodos.findIndex(it=>it.id === todoId)
    auxTodos[index] = {...auxTodos[index], done:!auxTodos[index].done}
    _warn(auxTodos);
  }

  const _warn = (newTodoList) => {
    setTodoList(newTodoList);
  }

  const buttonTest = {text:"button", action:()=>{console.log("oh waw")}}

  return (<>
    <TodoWarning title="aaa" body="aaaaa" 
      button={{text:"button", action:()=>{console.log("oh waw")}}}
    />
    
    <TodoAdd addTodo={addTodo}/>
    {todoList.map(todo => 
      <TodoItem key={todo.id} todo={todo} 
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
      />
    )}

  </>);
}