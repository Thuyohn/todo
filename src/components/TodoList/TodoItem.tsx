import '../../styles/TodoItem.css'
type TodoItemProps = {
    text:string
}

const TodoItem = ({ text }: TodoItemProps) => {
    return (<li>{text}</li>);
};

export default TodoItem;
