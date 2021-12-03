import react, { useState } from "react";
import { TodoItem } from '../TodoItem';
import { TodoAdd } from '../TodoAdd';
import './style.css';

export function Warning( props ) {
  const {condition, title, body, button} = props 

  if(condition && !condition()) return(<> {props.children} </>)
  return (<div>
    <h2> {title} </h2>
    <p> {body} </p>

    {button !== undefined ?
      <button onClick={button?.action}> 
        {button?.text} 
      </button>
      :
      <></>
    }
  </div>);
}

export const check = (cases, successCB) => {
  let errorMessages = [] 
  cases.forEach(probCase => {
    if(probCase.condition()){
      errorMessages.push(probCase.errorMessage);
    }  
  });

  if(errorMessages.length === 0){
    successCB()
  } else {
    return errorMessages;
  }
}