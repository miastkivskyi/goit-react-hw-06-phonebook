import { useState } from 'react';
import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const loginInputId = nanoid();

  const handleChange = event => {
    const { value, name } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const state = { number, name };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ id: nanoid(), ...state });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor={loginInputId}>
          <h2 className={css.titleForm}>Name</h2>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={loginInputId}
            value={name}
            onChange={handleChange}
            className={css.inputForm}
          />
        </label>

        <label htmlFor={loginInputId}>
          <h2 className={css.titleForm}>Number</h2>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={loginInputId}
            value={number}
            onChange={handleChange}
            className={css.inputForm}
          />
        </label>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
