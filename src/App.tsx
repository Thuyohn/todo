import { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (text:string) => {
    setTodos((prevTodos) => [...prevTodos, text])
  }
  return(
    <div>
      <h1>Todo App</h1>
      <AddTodoForm onAddTodo={handleAddTodo}></AddTodoForm>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App;
