import React, { useState } from 'react'
import '../../styles/AddTodoForm.css'
import ErrorMessage from '../ErrorMessage/ErrorMessage';


type AddTodoFormProps = {
    onAddTodo: (text: string) => void;
}

const AddTodoForm = ({onAddTodo}: AddTodoFormProps) => {
    const [newTodo, setNewTodo] = useState('');
    const [showError, setShowError] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value);
        setShowError(false);
    }

    const handleAddTodo = () => {
        if (newTodo.trim() === '') {
            setShowError(true);
        }
        else {
            onAddTodo(newTodo);
            setNewTodo('');
            setShowError(false);
        }
    };

    return(
        <>
            <div className='controls-container'>
                <input type="text" className='form-control input-field' value={newTodo} onChange={handleInputChange} />
                <button className='btn btn-primary btn-sm' style={{width: '50%'}} onClick={handleAddTodo}>Add Todo</button>
            </div>
            {
                showError && <ErrorMessage message='Please enter a todo before adding!'/>
            }
        </>
        
    );
};

export default AddTodoForm;
