// TodoContext.js
import { createContext, useReducer } from 'react';
import todoReducer from './TodoReducer';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
        {children}
        </TodoContext.Provider>
    );
};

export { TodoProvider, TodoContext };
