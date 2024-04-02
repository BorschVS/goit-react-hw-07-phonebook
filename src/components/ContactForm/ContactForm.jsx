import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [form, setForm] = useState({});

  function contactExists(currentName) {
    return contacts.find(({ name }) => name === currentName) !== undefined;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    contactExists(form.name)
      ? toast.error(`${form.name} is already in contacts`)
      : dispatch(addContact(form));

    !contactExists(form.name) && setForm({});
  }

  return (
    <form className={css.Form} onSubmit={handleSubmit}>
      <label className={css.Form__label}>
        Name
        <input
          maxLength={18}
          className={css.Form__input}
          type="text"
          name="name"
          value={form.name || ''}
          onChange={handleChange}
          required
        />
      </label>

      <label className={css.Form__label}>
        Number
        <input
          maxLength={18}
          className={css.Form__input}
          type="tel"
          name="phone"
          value={form.phone || ''}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" className={css.Form__button}>
        Add contact
      </button>
    </form>
  );
}
