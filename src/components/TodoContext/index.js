import React, { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const defTodos = [
        {id:1, name:"📚 Features implemented:", done:false},
        {id:2, name:"✨ React Hooks", done:true},
        {id:3, name:"🔮 React Custom Hooks", done:true},
        {id:4, name:"👉 React Refferences", done:true},
        {id:5, name:"🚀 React Portals", done:true},
        {id:6, name:"📝 React Context", done:true},
        {id:7, name:"💖 Hope you love it", done:false},
    ]

    const {
        storageItem: todoList, 
        setLocalElement: setTodoList, 
        loading,
        error
    } = useLocalStorage("TODOS_V1", defTodos)

    const [filterText, setFilterText] = useState("")
    const [showingAddDialog, setShowingAddDialog] = useState(false)

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
        <TodoContext.Provider value={{
            loading,
            error,
            todoList,
            todoListFiltered,
            setTodoList,
            filterText,
            setFilterText,
            addTodo,
            deleteTodo,
            toggleDone,
            showingAddDialog,
            setShowingAddDialog
        }}>
            {props.children}
        </TodoContext.Provider>    
    )
}

export {TodoContext, TodoProvider}