import React, {useContext} from "react";
import { TodoContext } from "../TodoContext";
import { Modal, ModalDialog } from '../Modal';

export function TodoAddDialog() {

    const {showingAddDialog, setShowingAddDialog} = useContext(TodoContext)

    return(
        <ModalDialog 
            showing={showingAddDialog}
            setShowing={setShowingAddDialog}
            title="esto es un dialogo jaja"
            body={"vaya cuerpo que tiene este dialogo"}
            button1={{
                action: ()=>{console.log('button1')},
                text: "Primary Button"
            }}
            button2={{
                action: ()=>{console.log('button2')},
                text: "secondary button"
            }}
        />
    )
}