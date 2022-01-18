import './style.css';

export function TodoList({
  error,
  loading,
  onError,
  onLoading,
  onEmpty,
  onEmptySearch,
  todoList,
  todoListFiltered,
  filterText,
  render,
  children
}) {  
  return (<>
    {error && onError()}
    {loading && onLoading()}
    {!loading && todoList.length === 0 && onEmpty()}
    {!loading && todoListFiltered.length === 0 && todoList.length != 0 && !!filterText && onEmptySearch(filterText)}
    
    {!loading && !error && render   && todoListFiltered.map(render)}
    {!loading && !error && children && todoListFiltered.map(children)}
  </>);
}