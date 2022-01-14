import './style.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

export function TodoCounter() {
  
  return (
  
    <TodoContext.Consumer>
      {({
        todoList,
        todoListFiltered,
      }) => {
        let filtered = todoListFiltered.length
        let done = todoList.filter(it=>it.done).length
        let total = todoList.length

        return (<div>
          <p> Visibles {filtered} / {total} and done  {done} todos</p>
        </div>)
      }}
    </TodoContext.Consumer>
  );
}