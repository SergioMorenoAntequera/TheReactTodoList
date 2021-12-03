import { useState } from 'react';
import { Warning } from '../Warning';
import './style.css';

export function TodoAdd({ addTodo }) {
  const [newTodo, setNewTodo] = useState({id:-1, name:"", done:false})
  const [warningMessage, setWarningMessage] = useState("")
    

  const updateName = (e) => {
    setNewTodo({...newTodo, name:e.target.value});
  }
  const updateDone = (e) => {
    setNewTodo({...newTodo, done:e.target.checked});
  }

  const submitTodo = () => {
    let newTodoAux = {...newTodo}

    if(newTodoAux.name.length === 0)

    addTodo({...newTodo})
  }

  const checkWarnings = (callback) => {
    
    callback();
  } 

  return (<>
  
    <div className="todo-add-form">
      <form onSubmit={(event)=> {event.preventDefault()}} action="">
        <input onKeyUp={updateName} type="text"/>
        <input onChange={updateDone} type="checkbox"/>
        <button type="submit" onClick={submitTodo}> Add </button>
      </form>
      
      <Warning title={warningMessage}/>  
    </div>
    
    </>);
}