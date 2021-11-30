import { useState } from 'react';
import './style.css';

export function TodoAdd({ addTodo }) {
  const [newTodo, setNewTodo] = useState({id:-1, name:"", done:false})

  const updateName = (e) => {
    setNewTodo({...newTodo, name:e.target.value});
  }

  const submitTodo = () => {
    addTodo({...newTodo})
  }

  return (<>
  
    <input onKeyUp={updateName} type="text"/>
    <button onClick={submitTodo}> añadir </button>

  </>);
}