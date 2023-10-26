import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    throw error;
  }
});

export const updateContact = createAsyncThunk('contacts/updateContact', async ({ contactId, updatedContact }) => {
  try {
    const response = await axios.patch(`/contacts/${contactId}`, updatedContact);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  try {
    const response = await axios.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async (userData) => {
  try {
    const response = await axios.post('/users/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await axios.post('/users/logout');
  } catch (error) {
    throw error;
  }
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async () => {
  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    throw error;
  }
});
