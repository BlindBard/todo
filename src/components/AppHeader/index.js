import React from 'react';

import cn from 'classnames';
import styles from './styles.module.scss';

const AppHeader = ({ toDo, done }) => {
  return (
    <div className={cn(styles.app_header, 'd-flex')}>
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
