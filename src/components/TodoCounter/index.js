import './style.css';

export function TodoCounter( {total, filtered, done} ) {
  
  return (<div>
    <p> Visibles {filtered} / {total} and done  {done} todos</p>
  </div>);
}