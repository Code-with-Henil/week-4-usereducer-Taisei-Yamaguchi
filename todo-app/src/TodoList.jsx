// TodoList.js
import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
    const { todos, dispatch } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
        dispatch({ type: 'ADD_TODO', payload: newTodo });
        setNewTodo('');
        }
    };

    const handleToggleTodo = (index) => {
        dispatch({ type: 'TOGGLE_TODO', payload: index });
    };

    const handleRemoveTodo = (index) => {
        dispatch({ type: 'REMOVE_TODO', payload: index });
    };

    return (
        <div>
        <ul>
            {todos.map((todo, index) => (
            <li key={index}>
                <input
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => handleToggleTodo(index)}
                />
                {todo.task}
                <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </li>
            ))}
        </ul>
        <div>
            <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        </div>
    );
};

export default TodoList;
