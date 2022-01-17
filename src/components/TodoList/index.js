import './style.css';

export function TodoList({
  error,
  loading,
  onError,
  onLoading,
  onEmpty,
  todoList,
  render
}) {  
  return (<>
    {error && onError()}
    {loading && onLoading()}
    {!loading && todoList.length === 0 && onEmpty()}
    
    {!loading && !error && todoList.map(render)}
  </>);
}