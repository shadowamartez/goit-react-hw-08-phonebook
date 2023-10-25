import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false, 
  user: null, 
  token: null, 
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.currentUser = action.payload.currentUser;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.currentUser = null; 
    },
    registerUser: (state, action) => {
      state.isAuthenticated = true; 
      state.user = action.payload.user; 
      state.token = action.payload.token; 
      state.currentUser = action.payload.currentUser; 
    },
  },
});

export const { loginUser, logoutUser, registerUser } = authSlice.actions;

export default authSlice.reducer;

