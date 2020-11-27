import React from 'react';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDeleteTodo: PropTypes.func
};

TodoItem.defaultProps = {
  todo: {},
  onDeleteTodo: null
};

function TodoItem(props) {

  const { todo, onDeleteTodo } = props;

  function handleDeleteTodo(todo) {
    if (onDeleteTodo) {
      onDeleteTodo(todo);
    }
  }

  return (
    <div>
      <span>{todo.name}</span>
      <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
    </div>
  );
}

export default TodoItem;