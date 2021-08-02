import PropTypes from 'prop-types';
import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const { todo, onDeleteTodo } = props;

  function deleteTodo(todoId) {
    if (onDeleteTodo) {
      onDeleteTodo(todoId);
    }
  }

  return (
    <div className="todo-item">
      <strong>{todo.name}</strong>
      <button onClick={() => deleteTodo(todo.id)}>x</button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDeleteTodo: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {},
  onDeleteTodo: null,
};

export default TodoItem;
