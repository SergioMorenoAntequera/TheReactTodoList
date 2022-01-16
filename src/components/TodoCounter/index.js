import './style.css';
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

export function TodoCounter() {
  
  const {todoList, todoListFiltered} = useContext(TodoContext)
  let filtered = todoListFiltered.length
  let done = todoList.filter(it=>it.done).length
  let total = todoList.length

  return (<div className='TodoCounter'>
    <p className='main'> {done} / {total} </p>
    
    {filtered !== total && 
      <p> Showing {filtered} </p>
    }
    
  </div>)
}