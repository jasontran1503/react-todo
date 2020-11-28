import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../todo-item/TodoItem';

TodoList.propTypes = {
  todos: PropTypes.array,
  onDeleteTodo: PropTypes.func
};

TodoList.defaultProps = {
  todos: [],
  onDeleteTodo: null
};

function TodoList(props) {

  const { todos, onDeleteTodo } = props;

  return (
    <div>
      {todos.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        );
      })}
    </div>
  );
}

export default TodoList;