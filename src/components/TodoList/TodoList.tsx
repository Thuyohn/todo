import TodoItem from './TodoItem';

type TodoListProps = {
    todos:string[];
}
const TodoList = ({ todos }: TodoListProps) => {
    return (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem key={index} text={todo} />
          ))}
        </ul>
      );
};

export default TodoList;