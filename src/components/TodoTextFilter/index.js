import './style.css';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

export function TodoTextFilter() {

  const { setFilterText } = useContext(TodoContext)

  return (<>
    <form action="" style={{marginTop: "1em"}}>
      <span> filtro de texto </span>
      <input type="text" onChange={(e)=>{setFilterText(e.target.value) }}/>
    </form>   
  </>);
}