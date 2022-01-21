import './style.css';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

export function TodoTextFilter( { setFilterText, loading }) {
  const inputRef = useRef()
  
  return (<>
    <form className='TodoTextFilter' onSubmit={(e)=>{e.preventDefault()}} action="">
      <input disabled={loading} type="text" ref={inputRef} onChange={(e)=>{setFilterText(e.target.value) }}/>
      <FaSearch className='' onClick={()=>{inputRef.current.select()}}/>
    </form>   
  </>);
}