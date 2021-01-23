import React, { Component } from 'react';

import cn from 'classnames';
import styles from './styles.module.scss';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form
        className={cn(styles.item_add_form, 'd-flex')}
        onSubmit={this.onSubmit}
      >
        <input
          className={cn('form-control', styles.new_todo_label)}
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary">Add item</button>
      </form>
    );
  }
}
