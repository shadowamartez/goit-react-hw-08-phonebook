import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../utils/api';
import { selectAllNeededContacts } from '../redux/selectors';

export function ContactList() {
  const contacts = useSelector(selectAllNeededContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.phone} <b></b>
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
