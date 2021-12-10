import { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { TodoCounter } from '../TodoCounter';
import { Warning } from '../Warning';
import './style.css';

export function TodoTextFilter({ allTodos, setTodoList }) {
  
  function filter(e) {
    let filtered = [...allTodos.filter(todo => todo.name.includes(e.target.value))]
    setTodoList(filtered)
  }

  return (<>
    <form action="" style={{marginTop: "1em"}}>
      <span> filtro de texto </span>
      <input type="text" onChange={filter}/>
    </form>   
  </>);
}