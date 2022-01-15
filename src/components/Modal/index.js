import "./style.css"
import React from "react";
import ReactDOM from "react-dom";
import { TodoAdd } from "../TodoAdd";

export function Modal(props) {
    return (
        ReactDOM.createPortal(
            props.children,
            document.getElementById("modal")
        )
    )
}

// Multi Purpose Dialog
export function ModalDialog({
        showing, 
        setShowing, 
        title, 
        body, 
        button1, 
        button2
    }) { 

    function hide() {
        setShowing(false)
    }
 
    if(!showing) return<></>

    return(<Modal>
        <div className="modal-dialog-container">
            <div className="modal-dialog">
                <div className="header">
                    <h3> {title} </h3>
                    <span className="x" onClick={hide}> x </span>
                </div>
                <TodoAdd></TodoAdd>
                <p> {body} </p>

                <div>
                    {button2 && <button onClick={button2.action}> {button2.text} </button>}
                    {button1 && <button onClick={button1.action}> {button1.text} </button>}
                </div>
            </div>
        </div>
    </Modal>);
}