import './style.css';
import { TodoContext } from '../TodoContext';

export function TodoTextFilter() {

  return (<>
    <TodoContext.Consumer>
      {({
        setFilterText
      }) => {
        return(
          <form action="" style={{marginTop: "1em"}}>
            <span> filtro de texto </span>
            <input type="text" onChange={(e)=>{setFilterText(e.target.value) }}/>
          </form>   
        )
      }}
    </TodoContext.Consumer>
  </>);
}