import { useState } from 'react';
import { Warning } from '../Warning';
import './style.css';

export function TodoAdd({ addTodo }) {
  const [newTodo, setNewTodo] = useState({id:-1, name:"", done:false})
  var nameWarning = {condition: (newName)=>{return newName.length === 0}, 
    title:"NAme too short", body:""
  }



  const updateName = (e) => {
    setNewTodo({...newTodo, name:e.target.value});
  }
  const updateDone = (e) => {
    setNewTodo({...newTodo, done:e.target.checked});
  }

  const submitTodo = () => {
    let newTodoAux = {...newTodo}
      
    addTodo({...newTodo})
  }

  return (<>
  
    <form onSubmit={(event)=> {event.preventDefault()}} action="">
      <input onKeyUp={updateName} type="text"/>
      <input onChange={updateDone} type="checkbox"/>
      <button type="submit" onClick={submitTodo}> Add </button>
    </form>
    <Warning condition={()=>{return true}} title={"asdasd"}/>  

  </>);
}