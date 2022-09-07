import s from '../ContactList/ContactList.module.css';
// import PropTypes from 'prop-types';

import React, { Component } from 'react';
export class ContactList extends Component {
  render() {
    return (
      <ul className={s.list}>
        {this.props.contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={s.item}>
              <span className={s.name}>{name}: </span>
              <span className={s.tel}>{number} </span>
              <button
                className={s.btn}
                type="button"
                onChange={this.props.handleDelete}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
