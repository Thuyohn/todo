import TodoItem from './TodoItem';
import '../../styles/TodoList.css'

type TodoListProps = {
    todos:string[];
}
const TodoList = ({ todos }: TodoListProps) => {
    return (
      <div className='todo-list-container'>
          <ul>
            {todos.map((todo, index) => (
              <TodoItem key={index} text={todo} />
            ))}
          </ul>
      </div>
      );
};

export default TodoList;