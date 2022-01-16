import "./style.css"
import React from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";

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
 
    if(!showing) return<></>

    return(<Modal>
        <div className="modal-dialog-container">
            <div className="modal-dialog">
                <div className="header">
                    <h3> {title} </h3>
                    <span className="x" onClick={()=>{setShowing(false)}}> x </span>
                </div>

                <p> {body} </p>

                <div>
                    {button2 && <button onClick={button2.action}> {button2.text} </button>}
                    {button1 && <button onClick={button1.action}> {button1.text} </button>}
                </div>
            </div>
        </div>
    </Modal>);
}

export function CustomModalDialog({ children, setShowing, title }){

    function hideIfClickedOut(event) {
        if(event.target.matches(".modal-dialog-container"))
            if(setShowing) setShowing(false)
    }

    return(<Modal>
        <div className="Modal modal-dialog-container" onClick={hideIfClickedOut}>
            <div className="modal-dialog">
                {!!title &&
                    <div className="header">
                        <h3> {title} </h3>
                        <span className="x" onClick={()=>{setShowing(false)}}> <FaTimes className="closeIcon"/> </span>
                    </div>
                }
                <div className="body">
                    { children }
                </div>
            </div>
        </div>
    </Modal>)
}