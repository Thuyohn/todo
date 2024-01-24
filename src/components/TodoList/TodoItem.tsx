import '../../styles/TodoItem.css'
type TodoItemProps = {
    text:string
}

const TodoItem = ({ text }: TodoItemProps) => {
    return (
        <>
          <div className="row" style={{ marginBottom: '10px' }}>
            <div className="col d-flex align-items-center">
              <p className="m-0">{text}</p>
            </div>
            <div className="col d-flex align-items-center justify-content-end">
              <button className='btn btn-danger btn-sm'>Remove</button>
            </div>
          </div>
        </>
    );
};

export default TodoItem;
