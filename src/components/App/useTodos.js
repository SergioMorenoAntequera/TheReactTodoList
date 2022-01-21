import React, { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function useTodos() {

    const defTodos = [
        {id:1, name:"📚 Features implemented:", done:true},
        {id:2, name:"✨ React Hooks", done:false},
        {id:8, name:"🧱 Component Composition", done:false},
        {id:3, name:"🔮 React Custom Hooks", done:false},
        {id:4, name:"👉 React Refferences", done:false},
        {id:5, name:"🚀 React Portals", done:false},
        {id:6, name:"📝 React Context", done:false},
        {id:9, name:"➡️ Render Props", done:false},
        {id:10, name:"⬅️ Render Functions", done:false},
        {id:11, name:"☁️ High Order Component", done:false},
        {id:12, name:"🌐 Instance Synchronization", done:false},
        {id:7, name:"📒 Local Storage", done:false},
        {id:13, name:"💖 Hope you love this", done:false},
    ]

    const {
        storageItem: todoList, 
        setLocalElement: setTodoList, 
        auxSetSynchronized: setSynchronized,
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

    return {
        todoList,
        setTodoList,
        setSynchronized,
        addTodo,
        deleteTodo,
        toggleDone,
        filterText,
        setFilterText,
        todoListFiltered,
        setShowingAddDialog,
        showingAddDialog,
        loading, 
        error,
    }
}

export {useTodos}