import { ContactsList } from './contacts/contactsList/contactsList';
import { ContactForm } from './contactsForm/contactsForm';
import { Filter } from './filter/filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { allContacts } from './Redux/selectors';

export const App = () => {
  const contacts = useSelector(allContacts);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>We don't have contact</p>
      )}

      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </div>
  );
};


