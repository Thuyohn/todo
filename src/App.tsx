import { useState } from "react";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = {
      id: todos.length + 1,
      text: text,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleRemoveTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="prose">
        <h1 style={{ padding: "50px" }}>Todo App</h1>
      </div>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} />
      <input
        type="checkbox"
        value="light"
        className="toggle theme-controller theme-toggle"
      />
    </div>
  );
}

export default App;
