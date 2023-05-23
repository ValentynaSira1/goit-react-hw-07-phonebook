import { ContactsListItem } from '../contactsListItem/contactsListItem';
import css from './contactsList.module.css';
import { useSelector } from 'react-redux';
import { filteredContacts } from '../../Redux/selectors';

export const ContactsList = () => {

  const contacts = useSelector(filteredContacts);
  return (
    <ul className={css.contacts__box}>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, phone }) => {
          return (
            <ContactsListItem key={id} name={name} number={phone} id={id} />
          );
        })
      ) : (
        <p>We don't find this contact</p>
      )}
    </ul>
  );
};