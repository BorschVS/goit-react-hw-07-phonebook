import React from 'react';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.ContactList__item} key={id}>
      <p className={css.text}>{name}</p>
      <p className={css.number} href="tel">
        {phone}
      </p>
      <button
        className={css.Delete__button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
