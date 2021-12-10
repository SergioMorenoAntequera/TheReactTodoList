import './style.css';

export function Warning( props ) {
  const {condition, title, body, button} = props 

  var auxCondition = condition ?? true
  if(!auxCondition) return(<> {props.children} </>)
  return (<div>
    <h2> {title ?? ""} </h2>
    <p> {body ?? ""} </p>

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
  // cases: [{condition:Boolean, errorMesssage:String}...]
  let errorMessages = [] 
  cases.forEach(probCase => {
    if(probCase.condition) {
      errorMessages.push(probCase.errorMessage);
    }  
  });

  if(errorMessages.length === 0 && successCB) successCB()
  return errorMessages;
}