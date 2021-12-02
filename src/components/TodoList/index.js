import react, { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { TodoCounter } from '../TodoCounter';
import { TodoWarning } from '../TodoWarning';
import './style.css';

export function TodoList(props) {
  const [todoList, setTodoList] = useState(props.todoList)
  const [todoWarning, setTodoWarning] = useState({title:"", body:"", button:{text:"", action:undefined}})

  const addTodo = (newTodo) => {
    newTodo.id = (todoList[todoList.length - 1]?.id ?? 1) + 1;
    setTodoList([...todoList, newTodo]);
  }
  const deleteTodo = (todoToRemoveId) => {
    setTodoList([...todoList].filter(it=>it.id !== todoToRemoveId));
  }
  const toggleDone = (todoId) => {
    let auxTodos = [...todoList];
    var index = auxTodos.findIndex(it=>it.id === todoId)
    auxTodos[index] = {...auxTodos[index], done:!auxTodos[index].done}
    setTodoList(auxTodos);
  }

  const checkWarnings = () => {
    var auxWarning = {...todoWarning}

    if(todoList.length === 0){
      auxWarning = {title:"A", body:"a", button:{text:"aaa", action:()=>{console.log("ni uno")}}}
    }
    if(todoList.length > 10){
      auxWarning = {title:"B", body:"b", button:{text:"bbb", action:()=>{console.log("demasiadoos")}}}
    }

    if(!auxWarning.title) {
      setTodoWarning(auxWarning)
    }
  }

  return (<>
    <TodoAdd addTodo={addTodo}/>
    <TodoCounter total={todoList.length} done={todoList.filter(it=>it.done).length}/>

    {todoWarning.title === "" ? 
      todoList.map(todo => 
        <TodoItem key={todo.id} todo={todo} 
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      )
      : 
      <TodoWarning title={todoWarning.title} body={todoWarning.body} button={todoWarning.button}/>  
    } 
    

  </>);
}