import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        <p className={css.contact}>
          {name}: {number}
        </p>
        <button
          type="button"
          onClick={() => onDelete(id)}
          className={css.button}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
