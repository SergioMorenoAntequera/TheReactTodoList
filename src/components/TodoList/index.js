import './style.css';

export function TodoList(props) {

  return (<ul>
    {props.children}    
  </ul>);
}