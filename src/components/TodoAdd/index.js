import { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { Warning, check } from '../Warning';
import './style.css';

export function TodoAdd() {
  const [newTodo, setNewTodo] = useState({id:-1, name:"", done:false})
  const [warningMessages, setWarningMessages] = useState([])

  const { addTodo } = useContext(TodoContext)
    

  const updateName = (e) => {
    setNewTodo({...newTodo, name:e.target.value});
  }
  const updateDone = (e) => {
    setNewTodo({...newTodo, done:e.target.checked});
  }

  const submitTodo = (addTodo) => {
    let newTodoAux = {...newTodo}
    var errorMessages = check([
      {condition: (newTodoAux.name.length === 0),
        errorMessage: "You must introduce a name to your TODO to add it"},
      {condition: (newTodoAux.name === "dick"),
        errorMessage: "No ffensie word pls, my uncle and my mom sleep together"},
      {condition: (newTodoAux.name === "pra"),
        errorMessage: "I wonder whoa re you"}
      ], () => {addTodo(newTodoAux)}
    )
    setWarningMessages(errorMessages);
  }

  return (<>
    <form onSubmit={(event)=> {event.preventDefault()}} action="">
      <input onKeyUp={updateName} type="text"/>
      <input onChange={updateDone} type="checkbox"/>
      <button type="submit" onClick={()=>{submitTodo(addTodo)}}> Add </button>
    </form>
    
    {
      warningMessages.map((message, index) => {
        return <Warning key={index} title={message}/>
      })
    } 
  </>);
}