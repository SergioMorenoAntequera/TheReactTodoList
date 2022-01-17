import './style.css';
import { useContext, useRef } from 'react';
import { TodoContext } from '../TodoContext';
import { FaSearch } from 'react-icons/fa';

export function TodoTextFilter( { setFilterText }) {
  const inputRef = useRef()

  return (<>
    <form className='TodoTextFilter' onSubmit={(e)=>{e.preventDefault()}} action="">
      <input type="text" ref={inputRef} onChange={(e)=>{setFilterText(e.target.value) }}/>
      <FaSearch className='' onClick={()=>{inputRef.current.select()}}/>
    </form>   
  </>);
}