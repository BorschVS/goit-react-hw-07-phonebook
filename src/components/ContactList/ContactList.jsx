import ContactItem from 'components/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    contacts.length > 0 && (
      <ul className={css.ContactList}>
        {contacts.map(({ id, name, phone }) => {
          return <ContactItem key={id} id={id} name={name} phone={phone} />;
        })}
      </ul>
    )
  );
};

export default ContactList;
