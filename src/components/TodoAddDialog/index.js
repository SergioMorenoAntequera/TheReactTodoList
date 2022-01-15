import React, {useContext, useEffect, useState} from "react";
import { TodoContext } from "../TodoContext";
import { CustomModalDialog } from '../Modal';
import { Warning, check } from '../Warning';

export function TodoAddDialog() {
    const [newTodo, setNewTodo] = useState({id:-1, name:"", done:false})
    const [warningMessages, setWarningMessages] = useState([])
    const textInputRef = React.createRef();
    const { addTodo,
            showingAddDialog, 
            setShowingAddDialog 
    } = useContext(TodoContext)
        
    const updateName = (e) => {
        setNewTodo({...newTodo, name:e.target.value});
    }
    const updateDone = (e) => {
        setNewTodo({...newTodo, done:e.target.checked});
    }
    
    function onSubmit(event) {
        event.preventDefault()
        
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

    useEffect(() => {
        textInputRef?.current?.select()
        setNewTodo({...newTodo, name:""});
        setWarningMessages([])

    }, [showingAddDialog])
    
    if(!showingAddDialog) return(<></>)
    return(
        <CustomModalDialog setVisible={setShowingAddDialog}>
            <form onSubmit={onSubmit}>
                <input onChange={updateName} 
                        type="text" ref={textInputRef}
                        placeholder="Learn React basics..."
                />

                <div>
                    <button type="button" onClick={()=>{setShowingAddDialog(false)}}>cancela</button>
                    <button type="submit"> dale caña</button>
                </div>
            </form>

            {warningMessages.map((message, index) => {
                return <Warning key={index} title={message}/>
            })} 
        </CustomModalDialog>
    )
}