import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import Form from 'components/Form/Form';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, deleteContact, setFilter } from 'redux/slice';

const App = () => {
  const { contacts, filter } = useSelector(state => state.phoneBook);
  const dispatch = useDispatch();

  const createContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    contacts.some(i => i.name === name)
      ? alert(`${name} is already in contacts`)
      : dispatch(increment(contact));
  };
  const handleFilter = e => {
    dispatch(setFilter(e.target.value.trim()));
  };
  const filteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form createContact={createContact} />
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter} value={filter} />
      <ContactList
        contacts={filteredContacts()}
        removeContact={removeContact}
      />
    </div>
  );
};

export default App;
