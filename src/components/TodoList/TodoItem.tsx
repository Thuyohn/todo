import "../../styles/TodoItem.css";
type TodoItemProps = {
  id: number;
  text: string;
  onRemove: (id: number) => void;
};

const TodoItem = ({ id, text, onRemove }: TodoItemProps) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };
  return (
    <>
      <div className="card w-96 bg-neutral shadow-xl mb-5">
        <div className="card-body">
          <div className="card-actions justify-end">
            <button
              className="btn btn-square btn-sm"
              onClick={handleRemoveClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
