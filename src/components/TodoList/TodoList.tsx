import TodoItem from './TodoItem';
import '../../styles/TodoList.css'

type TodoListProps = {
  todos: { id: number; text: string }[];
  onRemoveTodo: (id: number) => void;
}

const TodoList = ({ todos, onRemoveTodo }: TodoListProps) => {
  return (
      <div>
          {todos.map(todo => (
              <TodoItem key={todo.id} id={todo.id} text={todo.text} onRemove={onRemoveTodo} />
          ))}
      </div>
  );
};


export default TodoList;