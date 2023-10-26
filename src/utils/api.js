import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getToken = (getState) => {
  const { auth } = getState();
  return auth.token;
};

const withAuth = (config, getState) => {
  const token = getToken(getState);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, { getState }) => {
  try {
    const config = withAuth({}, getState);

    const response = await axios.get('/contacts', config);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact, { getState }) => {
  try {
    const config = withAuth({}, getState);

    const response = await axios.post('/contacts', contact, config);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, { getState }) => {
  try {
    const config = withAuth({}, getState);

    await axios.delete(`/contacts/${contactId}`, config);
    return contactId;
  } catch (error) {
    throw error;
  }
});

export const updateContact = createAsyncThunk('contacts/updateContact', async ({ contactId, updatedContact }, { getState }) => {
  try {
    const config = withAuth({}, getState);

    const response = await axios.patch(`/contacts/${contactId}`, updatedContact, config);
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

export const logoutUser = createAsyncThunk('auth/logoutUser', async ({ getState }) => {
  try {
    const config = withAuth({}, getState);

    await axios.post('/users/logout', null, config);
  } catch (error) {
    throw error;
  }
});

export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async ({ getState }) => {
  try {
    const config = withAuth({}, getState);

    const response = await axios.get('/users/current', config);
    return response.data;
  } catch (error) {
    throw error;
  }
});
