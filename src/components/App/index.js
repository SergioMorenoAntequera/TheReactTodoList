import './style.css';
import { AppUI } from "../AppUI"

export function App() {

  const TODOS = [
    {id:1, name:"Hola que pasa 1", done: false},
    {id:2, name:"Hola que pasa 2", done: false},
    {id:3, name:"Hola que pasa 3", done: false},
    {id:4, name:"Hola que pasa 4", done: false},
    {id:5, name:"Hola que pasa 5", done: false},
  ]

  return (
    <AppUI todoList={TODOS}/>
  );
}
