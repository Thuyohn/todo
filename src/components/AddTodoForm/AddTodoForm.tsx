import React, { useState } from "react";
import "../../styles/AddTodoForm.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

type AddTodoFormProps = {
  onAddTodo: (text: string) => void;
};

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const [newTodo, setNewTodo] = useState("");
  const [showError, setShowError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
    setShowError(false);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") {
      setShowError(true);
    } else {
      onAddTodo(newTodo);
      setNewTodo("");
      setShowError(false);
    }
  };

  return (
    <>
      <div className="controls-container">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Type your todo</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={newTodo}
            onChange={handleInputChange}
          />
        </label>
        <button
          className="btn btn-primary text-white"
          style={{ width: "50%", marginLeft: "20px" }}
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      {showError && (
        <ErrorMessage message="Please enter a todo before adding!" />
      )}
    </>
  );
};

export default AddTodoForm;
