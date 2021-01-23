import React from 'react';

import cn from 'classnames';
import styles from './styles.module.scss';

const TodoListItem = (props) => {
  const {
    label,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    done,
    important,
  } = props;

  const classNames = cn(
    styles.todo_list_item,
    done && styles.done,
    important && styles.important
  );

  return (
    <span className={classNames}>
      <span className={styles.todo_list_item_label} onClick={onToggleDone}>
        {label}
      </span>
      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
