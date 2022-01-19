import './style.css';

export function TodoCounter( {todoList, todoListFiltered, loading} ) {
  let filtered = todoListFiltered.length
  let done = todoList.filter(it=>it.done).length
  let total = todoList.length
  let text = done +"/"+ total
  if(loading) text = "..."

  let celeb = total != 0 && done===total && !loading
  return (<div className={`TodoCounter ${celeb? 'celeb' : ''}`}>
    
    <p className={`main ${celeb? 'celeb' : ''}`}> 
      <span hidden={!celeb}> 🎉</span>  
      {text} 
      <span hidden={!celeb}> 🎉</span>
    </p>
    
    {filtered !== total && 
      <p> Showing {filtered} </p>
    }
    
  </div>)
}