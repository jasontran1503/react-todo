import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoForm(props) {
  const { onAddTodo } = props;
  const [newTodo, setNewTodo] = useState('');

  function onInputChange(event) {
    const inputValue = event.target.value;
    setNewTodo(inputValue);
  }

  function createTodo(e) {
    e.preventDefault();

    if (newTodo === '') return;

    const newTodoItem = {
      id: Date.now(),
      name: newTodo,
    };

    if (onAddTodo) {
      onAddTodo(newTodoItem);
      setNewTodo('');
    }
  }

  return (
    <div>
      <h4>TODO</h4>
      <form>
        <input type="text" value={newTodo} onChange={onInputChange} />
        <button type="submit" onClick={createTodo}>
          +
        </button>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

TodoForm.defaultProps = {
  onAddTodo: null,
};

export default TodoForm;
