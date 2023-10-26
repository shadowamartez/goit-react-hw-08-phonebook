import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../utils/api';
import {
  selectIsLoading,
  selectError,
  selectToken,
  selectIsRefreshing,
} from '../redux/selectors';
import { ContactForm } from '../components/ContactForm';
import { ContactList } from '../components/ContactList';
import { Filter } from '../components/Filter/Filter';
import UserMenu from '../components/UserMenu';
import { Outlet } from 'react-router-dom';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token && !isRefreshing) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Contacts</h2>
      <UserMenu />
      <ContactForm />
      <Filter />
      {isLoading && !error ? <p>Loading...</p> : <ContactList />}
      <Outlet />
    </div>
  );
}

export default ContactsPage;
