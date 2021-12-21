import './style.css';

export function TodoTextFilter({ setFilterText, setTodoListFiltered, filterList }) {

  const filter = (e) => {
    setFilterText(e.target.value) 
    setTodoListFiltered(filterList(e.target.value, undefined))
  }

  return (<>
    <form action="" style={{marginTop: "1em"}}>
      <span> filtro de texto </span>
      <input type="text" onChange={filter}/>
    </form>   
  </>);
}