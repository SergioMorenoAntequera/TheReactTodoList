import './style.css';

export function TodoCounter( {todoList, todoListFiltered, loading} ) {
  let filtered = todoListFiltered.length
  let done = todoList.filter(it=>it.done).length
  let total = todoList.length
  let text = done +"/"+ total
  if(loading) text = "..."

  let celeb = total != 0 && done===total && !loading
  let cpTopPos = done * 100 / total;
  let cpBotPos = done !== total ? cpTopPos-5 : 100;
  if(loading) {
    cpTopPos = 0;
    cpBotPos = 0;
  }
  return (<div className={`TodoCounter ${celeb? 'celeb' : ''}`}>
    
    <div className={`bg ${celeb? 'celeb' : ''}`} 
         style={{clipPath:`polygon(0 0, ${cpTopPos}% 0, ${cpBotPos}% 100%, 0% 100%)`}}>
      
      <div className={`main ${celeb? 'celeb' : ''}`}>
        <span hidden={!celeb}> 🎉</span>  
        {text} 
        <span hidden={!celeb}> 🎉</span>
        <div className='filtered'>
          {filtered !== total && 
            <p> Showing {filtered} </p>
          }
      </div>
      </div>
    </div>
    
    <div className={`main ${celeb? 'celeb' : ''}`}>
      <span hidden={!celeb}> 🎉</span>  
      {text} 
      <span hidden={!celeb}> 🎉</span>
      <div className='filtered'>
        {filtered !== total && 
          <p> Showing {filtered} </p>
        }
      </div>
    </div>
    
    
    
  </div>)
}