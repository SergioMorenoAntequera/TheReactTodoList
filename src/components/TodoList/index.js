import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoLoading, TodoError, TodoNotFound } from '../TodoStates';
import './style.css';

export function TodoList({children}) {
  const {loading, error, todoListFiltered} = useContext(TodoContext)
  
  if(loading) return( <TodoLoading/> )
  if(error) return ( <TodoError/> )
  if(!loading && todoListFiltered.length === 0) return ( <TodoNotFound/> )

  return (<ul>
    {children}    
  </ul>);
}