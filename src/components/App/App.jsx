import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from '../App/App.module.css';

export default function App() {
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <Filter />
      <h1 className={css.title}>Contacts</h1>
      <ContactList />
    </>
  );
}
