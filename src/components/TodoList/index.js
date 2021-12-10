import { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';
import { Warning } from '../Warning';
import './style.css';

export function TodoList(props) {
  const [todoList, setTodoList] = useState(props.todoList)
  const allTodos = todoList;
  const filteredTodos = [];

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
    setTodoList(auxTodos)
  }

  return (<>
    <TodoAdd addTodo={addTodo}/>
    <TodoCounter total={todoList.length} filtered={0} done={todoList.filter(it=>it.done).length}/>
    <TodoTextFilter allTodos={allTodos} setTodoList={setTodoList}/>
    <Warning condition={todoList.length === 0} title={"No te queda naica"}>
      {todoList.map(todo => 
        <TodoItem key={todo.id} todo={todo} 
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      )}  
    </Warning>   
  </>);
}