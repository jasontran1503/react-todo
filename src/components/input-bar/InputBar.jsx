import React from 'react';
import PropTypes from 'prop-types';

InputBar.propTypes = {
  onAddTodo: PropTypes.func
};

InputBar.defaultProps = {
  onAddTodo: null
};

function InputBar(props) {

  const { onAddTodo } = props;

  function handleAddTodo(e) {
    if (e.keyCode === 13) {
      const newTodo = {
        id: Date.now(),
        name: e.target.value
      };
      if (onAddTodo) {
        onAddTodo(newTodo);
      }
    }
  }

  return (
    <div>
      <input type="text" onKeyUp={handleAddTodo} />
    </div>
  );
}

export default InputBar;