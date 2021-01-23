import React from 'react';

import TodoListItem from './TodoListItem';

import cn from 'classnames';
import styles from './styles.module.scss';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li className="list-group-item" key={id}>
        {/* <TodoListItem label={item.label} important={item.important} /> */}
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return <ul className={cn('list-group', styles.todo_list)}>{elements}</ul>;
};

export default TodoList;
