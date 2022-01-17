import React, {useContext, useEffect, useState} from "react";
import "./style.css"
import { CustomModalDialog } from '../Modal';
import { Warning, check } from '../Warning';
import { FaPlus } from "react-icons/fa";

export function TodoAddDialog({
    addTodo,
    showingAddDialog, 
    setShowingAddDialog
}) {
    const [newTodo, setNewTodo] = useState({id:-1, name:"", done:false})
    const [warningMessages, setWarningMessages] = useState([])
    const textInputRef = React.createRef();
        
    const updateName = (e) => {
        setNewTodo({...newTodo, name:e.target.value});
    }
    
    function onSubmit(event) {
        event.preventDefault()
        
        let newTodoAux = {...newTodo}
        var errorMessages = check([
        {condition: (newTodoAux.name.length === 0),
            errorMessage: "A name is required."},
        // {condition: (newTodoAux.name === "dick"),
        //     errorMessage: "No ffensie word pls, my uncle and my mom sleep together"},
        {condition: (newTodoAux.name === "pra"),
            errorMessage: "I wonder whoa re you"}
        ], () => {
            addTodo(newTodoAux)
            setNewTodo({...newTodo, name:""})
        })
        
        textInputRef?.current?.select()
        setWarningMessages(errorMessages);
    }

    useEffect(() => {
        textInputRef?.current?.select()
        setNewTodo({...newTodo, name:""});
        setWarningMessages([])

    }, [showingAddDialog])
    
    if(!showingAddDialog) return(<></>)
    return(
        <CustomModalDialog setShowing={setShowingAddDialog} title={"Add a new Todo to do"}>
            <form className="TodoAddDialog" onSubmit={onSubmit}>
                <p className="label"> Name </p>
                <input onChange={updateName} 
                        value={newTodo.name}
                        type="text" ref={textInputRef}
                        placeholder="Learn React basics..."
                />

                {warningMessages.map((message, index) => {
                    return <Warning key={index} title={message}/>
                })} 

                <div className="ctas">
                    <button className="secondary" type="button" onClick={()=>{setShowingAddDialog(false)}}>Cancel</button>
                    <button className="primary" type="submit"> 
                        <FaPlus/> 
                        <div> Add </div>
                    </button>
                </div>
            </form>
        </CustomModalDialog>
    )
}