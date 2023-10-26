import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser } from '../utils/api';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.currentUser = action.payload.currentUser;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
        state.currentUser = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.currentUser = action.payload.currentUser;
      });
  },
});

export const authSliceReducer = authSlice.reducer;

