import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');
  const handleChecked = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNamber(target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    createContact(name, number);
    setNamber('');
    setName('');
  };
  return (
    <>
      <div className={css.containerForm}>
        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.wrap}>
            {' '}
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChecked}
              value={name}
            />
          </div>
          <div className={css.wrap}>
            <label htmlFor="number">Namber</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChecked}
              value={number}
            />
          </div>

          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;

Form.propTypes = {
  createContact: PropTypes.func.isRequired,
};
