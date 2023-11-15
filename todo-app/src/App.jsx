// src/App.js
import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoList from './TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
