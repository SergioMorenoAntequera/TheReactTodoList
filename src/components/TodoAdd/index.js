import { useState } from 'react';
import { Warning, check } from '../Warning';
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
    var errorMessage = check([
      {condition: ()=> {return newTodoAux.name.length === 0},
        errorMessage: "You must introduce a name to your TODO to add it"},
      {condition: ()=> {return newTodoAux.name === ""},
        errorMessage: "No ffensie word pls, my uncle and my mom sleep together"}
      ], () => {addTodo({...newTodoAux})}
    )
    setWarningMessage(errorMessage);
  }

  

  return (<>
  
    <form onSubmit={(event)=> {event.preventDefault()}} action="">
      <input onKeyUp={updateName} type="text"/>
      <input onChange={updateDone} type="checkbox"/>
      <button type="submit" onClick={submitTodo}> Add </button>
    </form>
    
    <Warning title={warningMessage}/>  
    
    </>);
}