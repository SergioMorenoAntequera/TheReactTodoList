import './style.css';
import { useContext, useRef } from 'react';
import { TodoContext } from '../TodoContext';
import { FaSearch } from 'react-icons/fa';

export function TodoTextFilter() {
  const { setFilterText } = useContext(TodoContext)
  const inputRef = useRef()

  return (<>
    <form className='TodoTextFilter' action="" style={{marginTop: "1em"}}>
      <input type="text" ref={inputRef} onChange={(e)=>{setFilterText(e.target.value) }}/>
      <FaSearch className='' onClick={()=>{inputRef.current.select()}}/>
    </form>   
  </>);
}