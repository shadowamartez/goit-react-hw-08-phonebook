import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../utils/api';
import {
  selectIsLoading,
  selectError,
  selectToken,
  selectIsRefreshing,
} from '../../redux/selectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { Outlet } from 'react-router-dom';
import { StyledPageContainer } from './ContactsPage.styled';
import { Title } from './ContactsPage.styled';

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
    <StyledPageContainer>
      <Title>Contacts</Title>
      <ContactForm />
      <Filter />
      {isLoading && !error ? <p>Loading...</p> : <ContactList />}
      <Outlet />
    </StyledPageContainer>
  );
}

export default ContactsPage;
