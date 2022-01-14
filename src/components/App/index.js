import './style.css';
import { TodoProvider } from '../TodoContext';
import { AppUI } from "../AppUI"

export function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
