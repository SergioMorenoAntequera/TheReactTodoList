import './style.css';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

export function TodoCounter() {
  
  const {todoList, todoListFiltered, loading} = useContext(TodoContext)
  let filtered = todoListFiltered.length
  let done = todoList.filter(it=>it.done).length
  let total = todoList.length

  let celeb = total != 0 && done===total && !loading

  return (<div className={`TodoCounter ${celeb? 'celeb' : ''}`}>
    <p className={`main ${celeb? 'celeb' : ''}`}> 
    
      <span> 🎉</span>  
       {done} / {total} 
      <span> 🎉</span>  
    </p>
    
    {filtered !== total && 
      <p> Showing {filtered} </p>
    }
    
  </div>)
}