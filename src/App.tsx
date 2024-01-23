import { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (text:string) => {
    setTodos((prevTodos) => [...prevTodos, text])
  }
  return(
    <div className='app-container'>
      <h1 style={{padding: '20px'}}>Todo App</h1>
      <AddTodoForm onAddTodo={handleAddTodo}></AddTodoForm>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App;
