import { useState } from 'react';
import './style.css';

export function TodoAdd({ addTodo }) {
  const [newTodo, setNewTodo] = useState({id:-1, name:"", done:false})

  const updateName = (e) => {
    setNewTodo({...newTodo, name:e.target.value});
  }
  const updateDone = (e) => {
    setNewTodo({...newTodo, done:e.target.checked});
  }

  const submitTodo = () => {
    addTodo({...newTodo})
  }

  return (<>
  
    <form onSubmit={(event)=> {event.preventDefault(); submitTodo()}} action="">
      <input onKeyUp={updateName} type="text"/>
      <input onChange={updateDone} type="checkbox"/>
      <button type="submit" onClick={submitTodo}> Add </button>
    </form>  

  </>);
}