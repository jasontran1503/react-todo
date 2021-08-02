import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';

function Todo() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  function handleDeleteTodo(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }

  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo}></TodoForm>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo}></TodoItem>
      ))}
    </div>
  );
}

Todo.propTypes = {};

export default Todo;
