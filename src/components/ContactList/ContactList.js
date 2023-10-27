import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../utils/api';
import { selectAllNeededContacts } from '../../redux/selectors';
import { StyledPageContainer } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(selectAllNeededContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <StyledPageContainer>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number} <b></b>
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </StyledPageContainer>
  );
}
