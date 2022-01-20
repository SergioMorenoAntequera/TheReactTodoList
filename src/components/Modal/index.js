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

export function CustomModalDialog({ children, setShowing, title, customClasses, modal }){
    customClasses = customClasses ?? ""
    modal = modal ?? false

    function hideIfClickedOut(event) {
        if(modal) return;
        if(event.target.matches(".modal-dialog-container"))
            if(setShowing) setShowing(false)
    }

    return(<Modal>
        <div className={`Modal modal-dialog-container ${customClasses}`} onClick={hideIfClickedOut}>
            <div className="modal-dialog">
                {!!title &&
                    <div className="header">
                        <h3> {title} </h3>
                        {!modal && 
                            <span className="x" onClick={()=>{setShowing(false)}}> <FaTimes className="closeIcon"/> </span>
                        }
                    </div>
                }
                <div className="body">
                    { children }
                </div>
            </div>
        </div>
    </Modal>)
}