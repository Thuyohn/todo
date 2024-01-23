import React, { useState } from 'react'


type AddTodoFormProps = {
    onAddTodo: (text: string) => void;
}

const AddTodoForm = ({onAddTodo}: AddTodoFormProps) => {
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
    }

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            onAddTodo(newTodo);
            setNewTodo('');
        }
    };

    return(
        <div>
            <input type="text" value={newTodo} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};



export default AddTodoForm;
