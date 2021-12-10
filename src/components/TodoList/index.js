import { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';
import { Warning } from '../Warning';
import './style.css';

export function TodoList(props) {
  const [todoList, setTodoList] = useState(props.todoList)
  const [todoListFiltered, setTodoListFiltered] = useState(props.todoList)
  const [filterText, setFilterText] = useState("")

  const addTodo = (newTodo) => {
    newTodo.id = (todoList[todoList.length - 1]?.id ?? 1) + 1;
    let auxList = [...todoList, newTodo] 
    setTodoList(auxList);
    setTodoListFiltered(filterList(undefined, auxList));
  }
  const deleteTodo = (todoToRemoveId) => {
    let auxList = [...todoList].filter(it=>it.id !== todoToRemoveId) 
    setTodoList(auxList);
    setTodoListFiltered(filterList(undefined, auxList));
  }
  const toggleDone = (todoId) => {
    let auxTodos = [...todoList];
    var index = auxTodos.findIndex(it=>it.id === todoId)
    auxTodos[index] = {...auxTodos[index], done:!auxTodos[index].done}
    setTodoList(auxTodos)
  }
  const filterList = (textToCompare, listToCompare) => {
    textToCompare = textToCompare ?? filterText;
    listToCompare = listToCompare ?? todoList

    if(textToCompare == "") return [...listToCompare]
    let filtered = [...listToCompare.filter(todo => 
      todo.name.trim().toLowerCase().includes(textToCompare.trim().toLowerCase())
    )]
    return filtered;
  }

  return (<>
    <TodoAdd addTodo={addTodo}/>
    <TodoCounter 
      total={todoList.length} 
      filtered={todoListFiltered.length} 
      done={todoList.filter(it=>it.done).length}
    />
    <TodoTextFilter 
      setFilterText={setFilterText} 
      setTodoListFiltered={setTodoListFiltered} 
      filterList={filterList}
    />

    <Warning condition={todoList.length === 0} title={"No te queda naica"}>
      <Warning condition={todoListFiltered.length === 0} title={"No hemos encontrado naica"}>
        
        {todoListFiltered.map(todo => 
          <TodoItem key={todo.id} todo={todo} 
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
          />
        )}
        
      </Warning>  
    </Warning>   
  </>);
}