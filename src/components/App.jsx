import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default function App() {
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ id, name, number }) => {
    const newContact = { id, name, number };
    const normalizedFilter = name.toLowerCase();

    const repeatedName = Object.values(contacts).map(contact =>
      contact.name.toLowerCase()
    );

    repeatedName.includes(normalizedFilter)
      ? alert(`${name} is already in contacts`)
      : setContacts(contacts => [newContact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts()} onDelete={deleteContact} />
    </>
  );
}
