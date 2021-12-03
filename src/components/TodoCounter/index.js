import react, { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import './style.css';

export function TodoCounter( {total, done} ) {
  
  return (<div>
    <p> Se han completado {done} de {total} todos</p>
  </div>);
}