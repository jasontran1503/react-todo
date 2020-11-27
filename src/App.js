import './App.css';
import React, { useState } from 'react';
import TodoList from './components/todo-list/TodoList';
import InputBar from './components/input-bar/InputBar';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, name: 'Sleep' },
    { id: 2, name: 'Work' },
    { id: 3, name: 'Game' }
  ]);

  function handleAddTodo(newTodo) {
    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }

  function handleDeleteTodo(todo) {
    const index = todos.findIndex(x => x.id === todo.id);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Todo</h1>
      <InputBar onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;

