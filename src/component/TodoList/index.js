import { useContext } from 'react'
import { TodoContext } from '../TodoContext';
import { TodoItem } from "../TodoItem";

export function Loading() {
  return <div>Loading...</div>
}

export function TodoList() {
  const {
    searchedTodos,
    onComplete,
    onDelete
  } = useContext(TodoContext);

  if (searchedTodos.length === 0) return <div>Add the first task clicking <br/> the botton on the button!</div>
  return <ul className="list">
    {searchedTodos.map(item => (
      <TodoItem
        key={item.text}
        onComplete={() => onComplete(item.text)}
        onDelete={() => onDelete(item.text)}
      >{item}</TodoItem>
    ))}
  </ul>
}