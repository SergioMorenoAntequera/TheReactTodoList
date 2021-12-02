import react, { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import './style.css';

export function TodoWarning( {title, body, button} ) {

  
  if(title == "") return(<></>)
  return (<div>
    <h2> {title} </h2>
    <p> {body} </p>

    <div hidden={button == undefined}>
        <button onClick={button?.action}> 
          {button?.text} 
        </button>
    </div>
  </div>);
}