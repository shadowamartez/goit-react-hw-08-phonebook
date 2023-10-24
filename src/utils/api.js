import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'; 

export const fetchContacts = async () => {
  const response = await axios.get('/contacts'); 
  return response.data;
};

export const addContact = async (contact) => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async (contactId) => {
  await axios.delete(`/contacts/${contactId}`); 
};

export const updateContact = async (contactId, updatedContact) => {
  const response = await axios.patch(`/contacts/${contactId}`, updatedContact); 
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post('/users/signup', userData); 
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post('/users/login', userData);
  return response.data;
};

export const logoutUser = async () => {
  await axios.post('/users/logout'); 
};

export const getCurrentUser = async () => {
  const response = await axios.get('/users/current');
  return response.data;
};
