import { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import { TodoCounter } from '../TodoCounter';
import { TodoTextFilter } from '../TodoTextFilter';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Warning } from '../Warning';
import './style.css';

export function TodoList(props) {
  const {
    storageItem: todoList, 
    setLocalElement: setTodoList, 
    loading,
    error
  } = useLocalStorage("TODOS_V1", [])

  const [filterText, setFilterText] = useState("")

  const filterList = (textToCompare, listToCompare) => {
    textToCompare = textToCompare ?? filterText;
    listToCompare = listToCompare ?? todoList

    if(textToCompare === "") return [...listToCompare]
    let filtered = [...listToCompare.filter(todo => 
      todo.name.trim().toLowerCase().includes(textToCompare.trim().toLowerCase())
    )]
    return filtered;
  }

  let todoListFiltered = []
  if(!filterText) {
    todoListFiltered = todoList;
  } else {
    todoListFiltered = filterList()
  }
  
  const addTodo = (newTodo) => {
    newTodo.id = (todoList[todoList.length - 1]?.id ?? 1) + 1;
    let auxList = [...todoList, newTodo] 
    setTodoList(auxList);
  }
  const deleteTodo = (todoToRemoveId) => {
    let auxList = [...todoList].filter(it=>it.id !== todoToRemoveId) 
    setTodoList(auxList);
  }
  const toggleDone = (todoId) => {
    let auxTodos = [...todoList];
    var index = auxTodos.findIndex(it=>it.id === todoId)
    auxTodos[index] = {...auxTodos[index], done:!auxTodos[index].done}
    setTodoList(auxTodos);
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
    />

    {loading && !error && <p> We are loading you list froom the "API" ;) </p>}
    {!loading && todoList.length === 0 && <p> No te queda naica </p>}
    {!loading && todoListFiltered.length === 0 && <p> No hemos encntrao naica </p>}
        
    {todoListFiltered.map(todo => 
      <TodoItem key={todo.id} todo={todo} 
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
      />
    )}
        
  </>);
}