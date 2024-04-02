import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

import { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log('asd');
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="Container">
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="subtitle">Contacts</h2>
      <Filter />
      <br />
      {loading && !error && <RotatingLines height="40" width="40" />}
      <ContactList />
    </div>
  );
}

{
  /* <RotatingLines
  visible={true}
  
  color="grey"
  strokeWidth="5"
  animationDuration="0.75"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass=""
/>; */
}
