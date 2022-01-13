import './style.css';
import { useState } from 'react';
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { AppUI } from "../AppUI"

export function App() {
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

  return (
    <AppUI 
      loading={loading}
      error={error}
      todoList={todoListFiltered}
      setTodoList={setTodoList}
      filterText={filterText}
      setFilterText={setFilterText}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleDone={toggleDone}
    />
  );
}
