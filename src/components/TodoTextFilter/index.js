import './style.css';

export function TodoTextFilter({ setFilterText }) {

  const filter = (e) => {
    setFilterText(e.target.value) 
  }

  return (<>
    <form action="" style={{marginTop: "1em"}}>
      <span> filtro de texto </span>
      <input type="text" onChange={filter}/>
    </form>   
  </>);
}