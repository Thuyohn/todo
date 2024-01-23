import React, { useState } from 'react'
import '../../styles/AddTodoForm.css'


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
        <div className='controls-container'>
            <input type="text" className='form-control input-field' value={newTodo} onChange={handleInputChange} />
            <button className='btn btn-primary btn-sm' style={{width: '50%'}} onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};



export default AddTodoForm;
