import react, { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import './style.css';

export function TodoCounter( {total, filtered, done} ) {
  
  return (<div>
    <p> Visibles {filtered} / {total} and done  {done} todos</p>
  </div>);
}