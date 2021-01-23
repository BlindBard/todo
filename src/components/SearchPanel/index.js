import React, { Component } from 'react';

import cn from 'classnames';
import styles from './styles.module.scss';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        type="text"
        className={cn('form-control', styles.search_input)}
        placeholder="Type to search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
